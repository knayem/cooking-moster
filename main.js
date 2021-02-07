// document.getElementById("search-btn").addEventListener("click", function(){

//     console.log("search clicked");
    
    
// })




const search = document.getElementById('search-btn');
const term = search-btn.value ;
search-btn.addEventListener('click', function () {

    

    const apiKey = '1';
    
    const apiBase = `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`;
    
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
           .then(response => response.json())
           .then(data =>  displayMeals(data));
        });
    
           const displayMeals = meals  =>{
                               //countries
               const item = document.getElementById('search-result');
                     //countriesDiv
               for (let i = 0 ; i < meals.length ; i ++){
                                   //countries.length

                 const meal = meals[i];
                    //country  countries
                 const items = document.createElement('div');
         //mealDiv    //countryDiv
                     items.className ='item-Name';

                        const itemsInfo =`
                        <img onclick="displayDetail('${meal.idMeal}')"  class="food-img" src="${meal.strMealThumb}">
                        <h3 class=items-name > ${meal.strMeal} </h3>
                        `
                        items.innerHTML = itemsInfo ;
             //mealDiv    //countryDiv
                        item.appendChild(items);
                  //countriesDiv    //countryDiv

                        
              
           }
             
        }
