<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Methods: *');

$conn = mysqli_connect("localhost", "root", "", "testing");

// Check the connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// SQL query to select data from the user table
$sql = "SELECT * FROM users";

// Execute the query
$result = mysqli_query($conn, $sql);

// Check if the query was successful
if ($result) {
    // Fetch the results using a while loop
    $data = array(); // Initialize an array to store the results

    while ($row = mysqli_fetch_assoc($result)) {
        // Process each row of data
        $data[] = $row;
    }

    // Convert the data to JSON and echo it
    echo json_encode($data);
} else {
    // If the query fails, echo an error message
    echo "Error: " . mysqli_error($conn);
}

// Close the database connection
mysqli_close($conn);

?>
