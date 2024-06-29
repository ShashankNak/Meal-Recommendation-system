<?php
// Check if food parameter is set
if (isset($_GET['food'])) {
    // Get the user input (food item to search)
    $food = urlencode($_GET['food']);
    
    // Replace with your Edamam API credentials
    $app_id = '159a7df5';
    $app_key = 'be71029b60dc095ebfbd933ae989aee8';

    // API endpoint URL
    $url = "https://api.edamam.com/api/nutrition-data?app_id={$app_id}&app_key={$app_key}&ingr={$food}";

    // Fetch data from the API
    $response = file_get_contents($url);

    // Decode JSON response
    $data = json_decode($response, true);

    // Display nutritional information
    if ($data && isset($data['totalNutrients'])) {
        echo "<h2>Nutritional Information for {$food}:</h2>";
        echo "<ul>";
        foreach ($data['totalNutrients'] as $nutrient) {
            echo "<li>{$nutrient['label']}: {$nutrient['quantity']} {$nutrient['unit']}</li>";
        }
        echo "</ul>";
    } else {
        echo "<p>No nutritional information found for '{$food}'</p>";
    }
} else {
    echo "<p>No food item specified.</p>";
}