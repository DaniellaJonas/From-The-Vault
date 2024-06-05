function saved(){
    // console.log("saved");
    let recipes = localStorage.getItem("mySavedRecipes");
    console.log(recipes)
    // recipes = [];
    if (recipes==null){
        console.log("no recipes");
        recipes = [];
    }

    else{
        recipes = JSON.parse(recipes);
    }

    if(!recipes.find(recipe => recipe.name === "Crème Brûlée")){
        recipes.push({name:"Crème Brûlée", "link": ".././French/Sweet/Crème Brûlée/cb.html", img: "https://i.pinimg.com/564x/77/94/58/7794581cf64f834ecf5ffd991f439d91.jpg"});
        localStorage.setItem("mySavedRecipes",JSON.stringify(recipes));
        console.log(recipes)
    }
}
