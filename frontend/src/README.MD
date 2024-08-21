RECIPE WEB APP:

Description
RECIPE WEB APP is a web application that allows users to search for and manage their favorite recipes. It leverages the Spoonacular API to fetch detailed information about recipes. The backend is built using Node.js, Express, and MongoDB with Prisma as the ORM.

Table of Contents
Installation
Usage
API Endpoints
Technologies Used
Contributing
License
Contact

Installation
Follow these steps to set up the project locally:
# Clone the repository
git clone https://github.com/yourusername/recipe-web-app.git

# Navigate to the project directory
cd recipe-web-app

# Install dependencies
npm install

# Set up environment variables
# Create a .env file and add your Spoonacular API key and MongoDB connection string
echo "SPOONACULAR_API_KEY=your_api_key" >> .env
echo "DATABASE_URL=mongodb://localhost:27017/recipe-web-app" >> .env

# Run Prisma migrations
npx prisma migrate dev

# Start the development server
npm start

Usage
Searching for Recipes
To search for recipes, use the search bar on the homepage. The app will fetch recipes from the Spoonacular API based on your search term.

Managing Favorite Recipes
You can add recipes to your favorites and view them in the “Favorites” section. The app uses MongoDB to store your favorite recipes.

API Endpoints
Recipe Search
GET /api/recipes/search: Search for recipes.
Query Parameters:
searchTerm: The term to search for.
page: The page number for pagination.
Recipe Summary
GET /api/recipes/:recipeId/summary: Get a summary of a specific recipe.
Favorite Recipes
GET /api/recipes/favourite: Get a list of favorite recipes.
POST /api/recipes/favourite: Add a recipe to favorites.
Request Body:
recipeId: The ID of the recipe to add.
DELETE /api/recipes/favourite: Remove a recipe from favorites.
Request Body:
recipeId: The ID of the recipe to remove.

Technologies Used
Frontend: React, TypeScript
Backend: Node.js, Express
Database: MongoDB
ORM: Prisma
API: Spoonacular API
Contributing
We welcome contributions! Please follow these steps to contribute:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes.
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature-branch).
Open a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Contact
Your Name - David Moshe 
Email: moshedavid27@yahoo.com
 Project Link: https://github.com/davemosh/
