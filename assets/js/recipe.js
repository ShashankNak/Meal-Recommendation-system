$(document).ready(function () {
    // JSON data containing recipes
    var recipesData = {
        "DietPlan": [
            {
                "category": "Vegan",
                "recipes": [
                    {
                        "name": "Vegan Salad Bowl",
                        "video_url": "https://www.youtube.com/embed/ViwGpHRSVyE?si=451Gjl71K5Y3o1QV" ,
                        "description": "A refreshing salad bowl packed with nutrients and flavor. This vegan salad is perfect for a light and healthy meal.",
                        "ingredients": [
                            "Mixed greens 50 grams",
                            "Cherry tomatoes 50 grams",
                            "Cucumber 50 grams",
                            "Avocado 50 grams",
                            "Chickpeas 50 grams",
                            "Red onion 50 grams",
                            "Olive oil",
                            "Lemon juice"
                        ]
                    }
                    ,
                    {
                        "name": "Vegan Lentil Curry",
                        "video_url": "https://www.youtube.com/embed/0LrXnxhH5I0?si=d1Wg2xAr8p6ntcq7",
                        "description": "Hearty and comforting lentil curry, perfect for a cozy meal. This vegan curry is rich in protein and spices.",
                        "ingredients": [
                            "Red lentils 50 grams",
                            "Coconut milk",
                            "Onion 50 grams",
                            "Garlic 50 grams",
                            "Ginger 50 grams",
                            "Curry powder",
                            "Turmeric",
                            "Spinach"
                        ]
                    },
                    {
                        "name": "Vegan Buddha Bowl",
                        "video_url": "https://youtu.be/5grQyHO2-jw?si=tIQ820UALv3RPBnS",
                        "description": "A balanced bowl with colorful vegetables and protein-rich grains. This vegan Buddha bowl is satisfying and nutritious.",
                        "ingredients": [
                            "Quinoa 50 grams",
                            "Roasted sweet potatoes 50 grams",
                            "Steamed broccoli 50 grams",
                            "Chickpeas (roasted) 50 grams",
                            "Avocado slices 50 grams",
                            "Hummus",
                            "Tahini dressing"
                        ]
                    },
                    {
                        "name": "Vegan Tofu Stir Fry",
                        "video_url": "https://youtu.be/Ecq2svvSWXc?si=4NV0mPOl3TlhemlI",
                        "description": "Quick and flavorful tofu stir fry with vibrant vegetables. This vegan dish is perfect for a busy weeknight.",
                        "ingredients": [
                            "Firm tofu 50 grams",
                            "Bell peppers (various colors) 50 grams",
                            "Snap peas 50 grams",
                            "Carrots 50 grams",
                            "Soy sauce",
                            "Sesame oil",
                            "Garlic 50 grams",
                            "Ginger 50 grams"
                        ]
                    }
                ]
            },
            {
                "category": "Keto Diet",
                "recipes": [
                    {
                        "name": "Keto Chicken Alfredo",
                        "video_url": "https://youtu.be/zojDqERDMwU?si=JeIkReAiScH1X3UV",
                        "description": "Creamy Alfredo sauce over tender chicken, low-carb and delicious. This keto-friendly dish is satisfying and rich in flavor.",
                        "ingredients": [
                            "Chicken breast 50 grams",
                            "Heavy cream",
                            "Parmesan cheese",
                            "Butter",
                            "Garlic",
                            "Cauliflower (for cauliflower rice)"
                        ]
                    },
                    {
                        "name": "Keto Avocado Bacon Salad",
                        "video_url": "https://youtu.be/8Bo5-Kp6e5U?si=AfSdrbp1X_sPaNcD",
                        "description": "A rich salad with avocado, crispy bacon, and creamy dressing. This keto salad is perfect for a quick and filling meal.",
                        "ingredients": [
                            "Romaine lettuce 50 grams",
                            "Avocado 50 grams",
                            "Bacon 50 grams",
                            "Cherry tomatoes 50 grams",
                            "Blue cheese",
                            "Olive oil",
                            "Balsamic vinegar"
                        ]
                    },
                    {
                        "name": "Keto Beef Stuffed Peppers",
                        "video_url": "https://youtu.be/8aMQAemXS_Q?si=aPgab66Z2G1xkeG-",
                        "description": "Bell peppers stuffed with savory ground beef and cheese. This keto recipe is flavorful and satisfying.",
                        "ingredients": [
                            "Bell peppers (various colors) 50 grams",
                            "Ground beef 50 grams",
                            "Onion 50 grams",
                            "Garlic 50 grams",
                            "Tomato paste",
                            "Mozzarella cheese",
                            "Italian seasoning"
                        ]
                    },
                    {
                        "name": "Keto Salmon with Asparagus",
                        "video_url": "https://youtu.be/PTRk3s7_RWU?si=ZUZCxjUHw9H53Hte",
                        "description": "Baked salmon served with roasted asparagus, a healthy keto option. This dish is light, flavorful, and perfect for a keto diet.",
                        "ingredients": [
                            "Salmon fillets 50 grams",
                            "Asparagus 50 grams",
                            "Lemon",
                            "Dijon mustard",
                            "Olive oil",
                            "Garlic powder"
                        ]
                    }
                ]
            },
            {
                "category": "Non-Vegetarian Diet",
                "recipes": [
                    {
                        "name": "Chicken Tikka Masala",
                        "video_url": "https://www.youtube.com/embed/BOKdsepCrbc?si=6vSdnxaWiwaepaRz",
                        "description": "Creamy and spicy chicken curry, a classic favorite. This dish is perfect served with rice or naan bread.",
                        "ingredients": [
                            "Chicken thighs 50 grams",
                            "Yogurt",
                            "Tomato sauce",
                            "Garam masala",
                            "Ginger 50 grams",
                            "Garlic 50 grams",
                            "Heavy cream"
                        ]
                    },
                    {
                        "name": "Beef Bourguignon",
                        "video_url": "https://youtu.be/_Bx9P32tdaM?si=7E8buz3RwXiQd7VK",
                        "description": "Tender beef stewed in red wine with vegetables, a French classic. This dish is hearty, flavorful, and perfect for a cozy meal.",
                        "ingredients": [
                            "Beef chuck 50 grams",
                            "Red wine",
                            "Onion 50 grams",
                            "Carrots 50 grams",
                            "Mushrooms 50 grams",
                            "Beef broth",
                            "Tomato paste"
                        ]
                    },
                    {
                        "name": "Shrimp Scampi",
                        "video_url": "https://youtu.be/VZFSIs_37UA?si=5Rt6Dwdh20PjPMjQ",
                        "description": "Succulent shrimp in a garlic butter sauce, perfect over pasta or rice. This dish is quick, flavorful, and a seafood lover's delight.",
                        "ingredients": [
                            "Shrimp 50 grams",
                            "Butter",
                            "Garlic 50 grams",
                            "White wine",
                            "Lemon juice",
                            "Parsley",
                            "Parmesan cheese"
                        ]
                    },
                    {
                        "name": "Lamb Kebabs",
                        "video_url": "https://youtu.be/8jUf3bCyMSw?si=jdLl1ZOPnO3C2q-o",
                        "description": "Tender lamb marinated and grilled to perfection. These lamb kebabs are flavorful and great for a barbecue or a special dinner.",
                        "ingredients": [
                            "Lamb leg meat 50 grams",
                            "Yogurt",
                            "Cumin",
                            "Coriander",
                            "Paprika",
                            "Lemon juice",
                            "Olive oil"
                        ]
                    }
                ]
            },
            {
                "category": "Vegetarian",
                "recipes": [
                    {
                        "name": "Vegetarian Lasagna",
                        "video_url": "https://youtu.be/nVY6Ze5VYsk?si=IMu8QoqCLdJJm2WT",
                        "description": "A hearty and delicious vegetarian lasagna packed with vegetables and cheese. Perfect for a comforting meal.",
                        "ingredients": [
                            "Lasagna noodles",
                            "Ricotta cheese",
                            "Mozzarella cheese",
                            "Parmesan cheese",
                            "Marinara sauce",
                            "Zucchini 50 grams",
                            "Spinach 50 grams",
                            "Garlic 50 grams",
                            "Onion 50 grams"
                        ]
                    },
                    {
                        "name": "Vegetarian Stuffed Bell Peppers",
                        "video_url": "https://youtu.be/YvGQn4RqpIY?si=bn5YcaK1y6-20V-M",
                        "description": "Bell peppers stuffed with a flavorful mixture of quinoa, black beans, and corn. A satisfying vegetarian dish.",
                        "ingredients": [
                            "Bell peppers (various colors) 50 grams",
                            "Quinoa 50 grams",
                            "Black beans 50 grams",
                            "Corn 50 grams",
                            "Tomato sauce",
                            "Cheddar cheese",
                            "Cumin",
                            "Cilantro"
                        ]
                    },
                    {
                        "name": "Vegetarian Pad Thai",
                        "video_url": "https://youtu.be/zy_P70hXhdM?si=NcbKJzki3yb9Dvzi",
                        "description": "stir-fried rice noodles, vegetables, and tofu, all tossed in a savory, tangy, and slightly sweet sauce.",
                        "ingredients": [
                            "Rice noodles 50grams",
                            "Tofu 50 grams",
                            "pad thai sauce 50 milliliteres",
                            "peanuts 50 grams",
                            "Tomato",
                            "garlic",
                            "lime",
                            "Cilantro"
                        ]
                    }
                ]
            }
        ]
    };

    // Function to generate HTML for recipes
    function generateRecipesHTML(recipes) {
        var html = '';

        recipes.forEach(function (recipe) {
            html += '<div class="box">';
            html += '<h3 class="title">' + recipe.name + '</h3>';
            html += '<a href="../../pages/diet_plans/watch-video.html?name=' + encodeURIComponent(recipe.name) + 
                '&video_url=' + encodeURIComponent(recipe.video_url) + 
                '&description=' + encodeURIComponent(recipe.description) + 
                '&ingredients=' + encodeURIComponent(JSON.stringify(recipe.ingredients)) + 
                '">Watch Video</a>';
            html += '</div>';
        });

        return html;
    }

    // Function to render recipes based on category
    function renderRecipes(category, recipes) {
        var categoryHTML = '<div class="box-container">';
        categoryHTML += '<h2 class="heading">' + category + ' Recipes</h2>';
        categoryHTML += generateRecipesHTML(recipes);
        categoryHTML += '</div>';
        categoryHTML += '<br><br>';

        $('.courses').append(categoryHTML); // Append to .courses section
    }

    // Loop through each category and render its recipes
    recipesData.DietPlan.forEach(function (category) {
        renderRecipes(category.category, category.recipes);
    });
});
