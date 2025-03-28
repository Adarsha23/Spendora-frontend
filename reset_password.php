<?php
header("Content-Type: application/json");
require "db.php";

// Set security headers
header("X-Content-Type-Options: nosniff");
header("X-Frame-Options: DENY");

// Verify request method
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode([
        "success" => false, 
        "message" => "Invalid request method",
        "hint" => "Use POST with Content-Type: application/json"
    ]);
    exit;
}

// Get and validate input
$maxLengths = [
    'email' => 100,
    'recovery_code' => 6,
    'password' => 72 // BCrypt max length
];

try {
    $data = json_decode(file_get_contents("php://input"), true);
    
    if (json_last_error() !== JSON_ERROR_NONE) {
        throw new Exception("Invalid JSON data");
    }

    // Validate required fields
    $required = ["email", "recovery_code", "password"];
    foreach ($required as $field) {
        if (empty($data[$field])) {
            throw new Exception("Missing required field: $field");
        }
        // Validate length
        if (strlen($data[$field]) > $maxLengths[$field]) {
            throw new Exception("$field exceeds maximum length");
        }
    }

    $email = filter_var($data["email"], FILTER_SANITIZE_EMAIL);
    $recovery_code = preg_replace('/[^0-9]/', '', $data["recovery_code"]);
    $new_password = $data["password"];

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        throw new Exception("Invalid email format");
    }

    if (strlen($recovery_code) !== 6) {
        throw new Exception("Recovery code must be 6 digits");
    }

    // Verify recovery code
    $stmt = $conn->prepare("SELECT id, recovery_code_expiration FROM users WHERE email = ? AND recovery_code = ? LIMIT 1");
    $stmt->bind_param("ss", $email, $recovery_code);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows === 0) {
        // Security: Don't reveal if email exists
        throw new Exception("Invalid recovery code or code expired");
    }
    
    $user = $result->fetch_assoc();
    
    // Check expiration
    if (new DateTime() > new DateTime($user["recovery_code_expiration"])) {
        // Clear expired code
        $conn->query("UPDATE users SET recovery_code = NULL, recovery_code_expiration = NULL WHERE id = {$user['id']}");
        throw new Exception("Recovery code has expired");
    }
    
    // Validate password strength
    if (strlen($new_password) < 8) {
        throw new Exception("Password must be at least 8 characters");
    }

    // Hash new password
    $password_hash = password_hash($new_password, PASSWORD_BCRYPT);
    if ($password_hash === false) {
        throw new Exception("Failed to hash password");
    }
    
    // Update password - use transaction for safety
    $conn->begin_transaction();
    
    try {
        $stmt = $conn->prepare("UPDATE users SET password = ?, recovery_code = NULL, recovery_code_expiration = NULL WHERE id = ?");
        $stmt->bind_param("si", $password_hash, $user["id"]);
        
        if (!$stmt->execute()) {
            throw new Exception("Database update failed");
        }
        
        $conn->commit();
        
        // Success response
        echo json_encode([
            "success" => true, 
            "message" => "Password updated successfully",
            "security_notice" => "Please login with your new password"
        ]);
        
    } catch (Exception $e) {
        $conn->rollback();
        throw $e;
    }

} catch (Exception $e) {
    http_response_code(400);
    echo json_encode([
        "success" => false, 
        "message" => $e->getMessage(),
        "error_type" => get_class($e)
    ]);
} finally {
    if (isset($stmt)) $stmt->close();
    $conn->close();
}
?>