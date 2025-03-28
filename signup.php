<?php
// Start output buffering at the VERY TOP
ob_start();

// Set headers FIRST
header("Content-Type: application/json");

require "db.php";

// Verify request method immediately
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
    exit();
}

// Get and validate input
$json = file_get_contents('php://input');
$data = json_decode($json, true);

if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid JSON data']);
    exit();
}

if (empty($data['email']) || empty($data['username']) || empty($data['password'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'All fields are required']);
    exit();
}

// Sanitize and validate
$email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
$username = trim($data['username']);
$password = $data['password'];

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email format']);
    exit();
}

if (strlen($password) < 6) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Password must be at least 6 characters']);
    exit();
}

$passwordHash = password_hash($password, PASSWORD_BCRYPT);

// Initialize $stmt variable
$stmt = null;

try {
    // Check if user exists
    $stmt = $conn->prepare("SELECT id FROM users WHERE username = ? OR email = ?");
    if (!$stmt) {
        throw new Exception('Prepare failed: ' . $conn->error);
    }
    
    $stmt->bind_param("ss", $username, $email);
    if (!$stmt->execute()) {
        throw new Exception('Execute failed: ' . $stmt->error);
    }
    
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        http_response_code(409);
        echo json_encode(['success' => false, 'message' => 'Username or email already exists']);
        exit();
    }

    // Insert new user
    $stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
    if (!$stmt) {
        throw new Exception('Prepare failed: ' . $conn->error);
    }
    
    $stmt->bind_param("sss", $username, $email, $passwordHash);

    if ($stmt->execute()) {
        echo json_encode(['success' => true, 'message' => 'Registration successful']);
    } else {
        throw new Exception('Database error: ' . $stmt->error);
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Registration failed: ' . $e->getMessage()]);
} finally {
    // Clean up only if objects exist
    if ($stmt !== null) {
        $stmt->close();
    }
    if ($conn !== null) {
        $conn->close();
    }
    ob_end_flush();
}
?>