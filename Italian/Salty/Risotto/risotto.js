function saved(){
    let recipes = localStorage.getItem("mySavedRecipes");
    if (recipes == null){
        recipes = [];
    } 
    
    else {
        recipes = JSON.parse(recipes);
    }

    if(!recipes.find(recipe => recipe.name === "Risotto")){
        recipes.push({name:"Risotto", "link": ".././Italian/Salty/Risotto/risotto.html", img: "https://i.pinimg.com/564x/ca/71/59/ca71593fc08b0dd55a84d0fa3b98a196.jpg"});
        localStorage.setItem("mySavedRecipes",JSON.stringify(recipes));
    }
}
