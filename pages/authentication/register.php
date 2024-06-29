<?php
include '../../connection.php';

session_start();
function register($email, $password) {
    global $conn;
    $table = 'userCredentials';
    $emailColumn = 'email';
    $passwordColumn = 'password';

    // Check if user already exists
    $sql_check = "SELECT * FROM $table WHERE $emailColumn = ?";
    $stmt_check = $conn->prepare($sql_check);
    $stmt_check->bind_param("s", $email);
    $stmt_check->execute();
    $result_check = $stmt_check->get_result();

    if ($result_check->num_rows > 0) {
        return false; // User already exists
    }

    // Hash the password
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Insert new user
    $sql = "INSERT INTO $table ($emailColumn, $passwordColumn) VALUES (?, ?)";
    
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $email, $hashed_password);
    
    if ($stmt->execute()) {
        return true;
    } else {
        return false;
    }
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    if (register($email, $password)) {
        header("Location: login.html");
    
        exit();
    } else {
        echo "Registration failed: User already exists";
    }
}