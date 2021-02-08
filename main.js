// document.getElementById("search-btn").addEventListener("click", function(){

//     console.log("search clicked");
    
    
// })




const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', function () {
  
const click = document.getElementById('food-name').value;

if(  click == '' )
{
  
   alert( "Please Enter Food Name");
  
} 

 else{    

    const apiKey = '1';
    
    //const apiBase = `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`;
    
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${click }`)
           .then(response => response.json())
           .then(data =>  displayMeals(data.meals));
        }});
      
       

    
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
                        <img onclick="displayMealIngredient('${meal.idMeal}')"   class="item-img" src="${meal.strMealThumb}">
                        <h3 onclick="displayMealIngredient('${meal.idMeal}')"  class=items-name > ${meal.strMeal} </h3>
                        `
                        items.innerHTML = itemsInfo ;
             //mealDiv    //countryDiv
                        item.appendChild(items);
                        
                  //countriesDiv    //countryDiv

      }
             
        }


            
        
        const  displayMealIngredient = food => {
         

          const apiKey = '1';

          const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${food}`
          
           fetch (url)
          .then(response => response.json())
          .then(data =>  renderMealInfo(data.meals[0]));
  
}
const renderMealInfo = meal =>{

  const items = document.getElementById('item-details');
          
      items.innerHTML = `

      <img  class="item-img" src="${meal.strMealThumb}">
                    
       <h1>${meal.strMeal} <span id="originArea" > origin: ${meal.strArea} </span> </h1>
       <h2>${meal.strCategory} </h2>
       
:

      <h3>Ingredient:</h3>
      
      <ul type ="square" style=" ">
        <li> ${meal.strMeasure1} > ${meal.strIngredient1} </li>
        <li>${meal.strMeasure2} > ${meal.strIngredient2} </li>
          <li>${meal.strMeasure3} > ${meal.strIngredient3} </li>
            <li>${meal.strMeasure4} > ${meal.strIngredient4} </li>
              <li> ${meal.strMeasure5} > ${meal.strIngredient5} </li>
                <li> ${meal.strMeasure6} > ${meal.strIngredient6} </li>
                <li> ${meal.strMeasure7} > ${meal.strIngredient7} </li>
                <li> ${meal.strMeasure78} > ${meal.strIngredient8} </li>
              
                 

      </ul>

    `          

      
}





