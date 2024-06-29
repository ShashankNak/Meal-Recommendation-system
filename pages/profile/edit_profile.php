<?php
// Initialize session (if not already started)
session_start();

include '../../connection.php';



function validateInput($data)
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Validate and process form data on submission
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    global $conn;

    $name = $_POST['name'];
    $age = $_POST['age'];
    $height = $_POST['height'];
    $weight = $_POST['weight'];
    $gender = $_POST['gender'];
    $preference = $_POST['preference'];
    $goal = $_POST['goal'];
    $allergy = $_POST['allergy'];
    $id = $_COOKIE['user_id'];

    $check_sql = "SELECT * FROM userprofile WHERE id = ?";
    if ($stmt = $conn->prepare($check_sql)) {
        $stmt->bind_param("i", $id);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows == 0) {
            // Insert new profile data
            $sql = "INSERT INTO userprofile (id, name, age, height, weight, gender, goals, preferences, allergy) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
            if ($stmt = $conn->prepare($sql)) {
                $stmt->bind_param("issssssss", $id, $name, $age, $height, $weight, $gender, $goal, $preference, $allergy);

                if ($stmt->execute()) {
                    echo "<script>alert('Profile inserted successfully!');</script>";
                } else {
                    echo "<script>alert('Oops! Something went wrong. Please try again later.');</script>";
                }

                $stmt->close();
            }
        } else {
            // Update existing profile data
            $sql = "UPDATE userprofile SET name=?, age=?, height=?, weight=?, gender=?, goals=?, preferences=?, allergy=? WHERE id=?";
            if ($stmt = $conn->prepare($sql)) {
                $stmt->bind_param("ssssssssi", $name, $age, $height, $weight, $gender, $goal, $preference, $allergy, $id);

                if ($stmt->execute()) {
                    echo "<script>alert('Profile updated successfully!');</script>";
                } else {
                    echo "<script>alert('Oops! Something went wrong. Please try again later.');</script>";
                }
                header("Location: ../../index.php");
                $stmt->close();
                exit();

            }
        }

    }
}
