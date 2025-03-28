<?php
// Database credentials
$servername = "localhost";
$username = "root";      // Your database username
$password = "";          // Your database password
$database = "spendora";  // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    // Don't output directly - will be caught by error handler
    die(json_encode([
        'success' => false,
        'message' => 'Database connection failed',
        'error' => $conn->connect_error
    ]));
}

// Set charset to support special characters
$conn->set_charset("utf8mb4");


?>