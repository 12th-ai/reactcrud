<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Methods: *');
header('Content-Type: application/json');

// Assuming your database connection is established
$conn = mysqli_connect("localhost", "root", "", "testing");

// Check the connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Assuming you receive data from the React component
$data = json_decode(file_get_contents('php://input'), true);

// Extracting data
$userName = $data['userName'];
$userEmail = $data['userEmail'];
$password = $data['password']; // Corrected the variable name

// SQL query to insert data into the user table
$sql = "INSERT INTO user (user_name, user_email, password) VALUES ('$userName', '$userEmail', '$password')";

// Execute the query
if (mysqli_query($conn, $sql)) {
    // If the query is successful, send a success response
    echo json_encode(['message' => 'Data inserted successfully']);
} else {
    // If the query fails, send an error response
    echo json_encode(['error' => mysqli_error($conn)]);
}

// Close the database connection
mysqli_close($conn);

?>
