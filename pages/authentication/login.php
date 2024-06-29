<?php
include '../../connection.php';
session_start();
function login($email, $password,$userType,$remember) {
    global $conn;
    $table = $userType=='admin'?'adminCredentials' :'userCredentials';
    $emailColumn = 'email';
    $passwordColumn = 'password';
    $id = 'id';
    
    // Prepare SQL to select the hashed password from the database
    $sql = "SELECT $id,$passwordColumn FROM $table WHERE $emailColumn = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $hashed_password = $row[$passwordColumn];
        $id = $row[$id];
        if (password_verify($password, $hashed_password)) {
            if ($remember) {
                setcookie("user_id", $id, time() + (86400 * 30), "/"); // 30 days
                setcookie("email", $email, time() + (86400 * 30), "/"); // 30 days
                setcookie("password", $password, time() + (86400 * 30), "/"); // 30 days
                setcookie("userType", $userType, time() + (86400 * 30), "/");//30 days
            }
            return true;
        }   
    }
    return false;
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];
    $remember = isset($_POST['remember']) ? true : false;
    $userType = $_POST['userType'];

    if (login($email,$password,$userType,$remember)) {
        // Redirect to the appropriate page based on user type
        header("Location: ../../index.php"); // Replace with your login or register page URL
        exit();
        // For example, you could use:
        // header("Location: user_dashboard.php");
    } else {
        echo "Invalid credentials";
    }
}
