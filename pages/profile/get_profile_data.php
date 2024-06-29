<?php
// Initialize session (if not already started)
session_start();

include '../../connection.php';

// Fetch profile data based on user ID from cookie
$id = $_COOKIE['user_id']; // Assuming 'user_id' is set in the cookie

$sql = "SELECT * FROM userprofile WHERE id = ?";
if ($stmt = $conn->prepare($sql)) {
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        echo json_encode($row); // Output profile data as JSON
    } else {
        echo json_encode([]); // Output empty array if no profile found (optional)
    }

    $stmt->close();
} else {
    echo json_encode([]); // Output empty array if query preparation fails (optional)
}

$conn->close();
