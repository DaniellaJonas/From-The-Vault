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

    if(!recipes.find(recipe => recipe.name === "Mochi")){
        recipes.push({name:"Mochi", "link": ".././Japanese/Sweet/Mochi/mochi.html", img: "https://i.pinimg.com/564x/1c/71/a9/1c71a9a2e559956c36956164ad970af6.jpg"});
        localStorage.setItem("mySavedRecipes",JSON.stringify(recipes));
        console.log(recipes)
    }
}
