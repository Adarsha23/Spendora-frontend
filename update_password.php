<?php
// Database connection
$conn = new mysqli("localhost", "root", "", "spendora");

if ($conn->connect_error) {
    die(json_encode(["success" => false, "message" => "Database connection failed."]));
}

// Get input data (Assuming this script is called via AJAX with JSON data)
$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data["email"], $data["recovery_code"], $data["password"])) {
    echo json_encode(["success" => false, "message" => "Invalid request."]);
    exit;
}

$email = trim($data["email"]);
$recovery_code = trim($data["recovery_code"]);
$new_password = trim($data["password"]);

// Check if the recovery code exists and is not expired
$stmt = $conn->prepare("SELECT id, recovery_code_expiration FROM users WHERE email=? AND recovery_code=?");
$stmt->bind_param("ss", $email, $recovery_code);
$stmt->execute();
$result = $stmt->get_result();
$user = $result->fetch_assoc();

if (!$user) {
    echo json_encode(["success" => false, "message" => "Invalid recovery code."]);
    exit;
}

// Check if the recovery code is expired
if (strtotime($user["recovery_code_expiration"]) < time()) {
    echo json_encode(["success" => false, "message" => "Recovery code has expired. Request a new one."]);
    exit;
}

// Hash the new password
$password_hash = password_hash($new_password, PASSWORD_BCRYPT);

// Update password and clear recovery code
$stmt = $conn->prepare("UPDATE users SET password=?, recovery_code=NULL, recovery_code_expiration=NULL WHERE id=?");
$stmt->bind_param("si", $password_hash, $user["id"]);
$stmt->execute();

echo json_encode(["success" => true, "message" => "Password reset successful. You can now log in."]);

$conn->close();
?>
