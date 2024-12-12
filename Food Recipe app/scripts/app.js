import { renderNavbar } from "./navbar.js";

document.getElementById("navbar").innerHTML = renderNavbar();


// Function to fetch Recipe of the Day
async function fetchRecipeOfTheDay() {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
  const data = await response.json();
  const recipe = data.meals[0];

  return recipe;
}

// Function to render Recipe of the Day
async function renderRecipeOfTheDay() {
  const recipe = await fetchRecipeOfTheDay();
  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = `
    <h1>Recipe of the Day</h1>
    <hr>
    <div>
      <h3>${recipe.strMeal}</h3>
      <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}">
      <h3>Intruction :- </h3>
      <p>${recipe.strInstructions}</p>
    </div>
  `;
}

// Call the function for Recipe of the Day
renderRecipeOfTheDay();