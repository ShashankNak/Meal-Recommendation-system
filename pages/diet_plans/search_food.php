<?php
// Function to sort nutrients by quantity (descending order)
function sortByQuantity($a, $b) {
    return $b['quantity'] - $a['quantity'];
}

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

    // Display top 10 most important nutrients in a modal
    if ($data && isset($data['totalNutrients'])) {
        $nutrients = $data['totalNutrients'];

        // Sort nutrients by quantity (descending order)
        usort($nutrients, 'sortByQuantity');

        // Prepare modal content for top 10 nutrients
        $modal_content = '<div style="background-color: #fefefe; margin: 15% auto; padding: 20px; border: 1px solid #888; width: 80%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">';
        $modal_content .= '<span style="font-size: 20px; font-weight: bold; float: right; cursor: pointer;" onclick="closeModal()">&times;</span>';
        $modal_content .= '<h2 style="text-align: center;">Nutritional Information for ' . $food . ':</h2>';
        $modal_content .= '<table style="width: 100%; border-collapse: collapse; margin-top: 20px;">';
        $count = 0;
        foreach ($nutrients as $nutrient) {
            if ($count >= 10) {
                break; // Display only top 10 nutrients
            }
            $modal_content .= '<tr>';
            $modal_content .= '<td style="padding: 8px; text-align: left; border-bottom: 1px solid #ddd;">' . $nutrient['label'] . '</td>';
            $modal_content .= '<td style="padding: 8px; text-align: left; border-bottom: 1px solid #ddd;">' . number_format($nutrient['quantity'], 2) . ' ' . $nutrient['unit'] . '</td>';
            $modal_content .= '</tr>';
            $count++;
        }
        $modal_content .= '<tr>';
        $modal_content .= '<td style="padding: 8px; text-align: left;"><strong>Total Calories</strong></td>';
        $modal_content .= '<td style="padding: 8px; text-align: left;"><strong>' . number_format($data['calories'], 2) . '</strong></td>';
        $modal_content .= '</tr>';
        $modal_content .= '</table>';
        $modal_content .= '</div>';

        // Display modal content directly
        echo <<<HTML
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Nutritional Information</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f0f0f0;
                    margin: 0;
                    padding: 0;
                }
            </style>
            <script>
                function closeModal() {
                    window.history.back(); // Go back to previous page (index.php)
                }
            </script>
        </head>
        <body>
            {$modal_content}
        </body>
        </html>
        HTML;
    } else {
        echo "<p>No nutritional information found for '{$food}'</p>";
    }
} else {
    echo "<p>No food item specified.</p>";
}