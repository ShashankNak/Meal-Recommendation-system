<?php
include 'connection.php';

header("Cache-Control: no-cache, no-store, must-revalidate");
header("Pragma: no-cache");
header("Expires: 0");

session_start();
// Check if cookies are set

if (isset($_COOKIE['email']) && isset($_COOKIE['password']) && isset($_COOKIE['userType'])) {
    if (validateUser($_COOKIE['email'], $_COOKIE['password'],$_COOKIE['userType'])) {
        // Redirect to homepage if valid
        header("Location: pages/home/home.html");
        exit();
    }
}

// If cookies are not set or invalid, redirect to login/register page
header("Location: pages/authentication/login.html"); // Replace with your login or register page URL
exit();

// Function to validate user (example function, adjust as per your actual implementation)
function validateUser($email, $password,$userType) {
    global $conn;
    $table = $userType=='admin'?'adminCredentials' :'userCredentials';
    $emailColumn = 'email';
    $passwordColumn = 'password';

    //verify the user credentials from database
    // Prepare SQL to select the hashed password from the database
    $sql = "SELECT $passwordColumn FROM $table WHERE $emailColumn = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $hashed_password = $row[$passwordColumn];
        
        if (password_verify($password, $hashed_password)) {
            setcookie("email", $email, time() + (86400 * 30), "/"); // 30 days
            setcookie("password", $password, time() + (86400 * 30), "/"); // 30 days
            setcookie("userType", $userType, time() + (86400 * 30), "/"); // 30 days
            return true;
        }   
    }
    return false;
}
