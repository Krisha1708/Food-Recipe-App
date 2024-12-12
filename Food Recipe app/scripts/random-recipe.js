import { renderNavbar } from "./navbar.js";

document.getElementById("navbar").innerHTML = renderNavbar();


async function fetchRandomRecipe() {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
  const data = await response.json();
  const recipe = data.meals[0];
  
  return recipe;
}

async function renderRandomRecipe() {
  const recipe = await fetchRandomRecipe();
  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = `
    <h1>Random Recipe</h1>
    <div>
      <h2>${recipe.strMeal}</h2>
      <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}">
      <h3>Instruction :- </h3>
      <p>${recipe.strInstructions}</p>
    </div>
  `;
}

renderRandomRecipe();
