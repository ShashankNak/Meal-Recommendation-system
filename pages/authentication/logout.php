<?php
// Start session if not already started
session_start();

// Destroy all session data
session_destroy();

// Unset all session variables
$_SESSION = [];

// Expire all cookies
setcookie("user_id", "", time() - 3600, "/"); // Set to past time to expire
setcookie("email", "", time() - 3600, "/");
setcookie("password", "", time() - 3600, "/");
setcookie("userType", "", time() - 3600, "/");

// Redirect to login or home page after logout
header("Location: ../../index.php"); // Replace with appropriate URL
exit();
