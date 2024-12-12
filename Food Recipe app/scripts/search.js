import { renderNavbar } from "./navbar.js";

document.getElementById("navbar").innerHTML = renderNavbar();

document.getElementById('searchButton').addEventListener('click', async () => {
  const query = document.getElementById('searchInput').value;
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
  const data = await response.json();
  
  if (data.meals) {
    const resultsDiv = document.getElementById('searchResults');
    resultsDiv.innerHTML = data.meals.map(meal => `
      <div>
        <h3>${meal.strMeal}</h3>
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        <p>${meal.strInstructions}</p>
      </div>
    `).join('');
  } else {
    alert('No recipes found');
  }
});