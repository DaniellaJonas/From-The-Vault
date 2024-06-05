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

    if(!recipes.find(recipe => recipe.name === "Tiramisu")){
        recipes.push({name:"Tiramisu", "link": ".././Italian/Sweet/Tiramisu/tiramisu.html", img: "https://i.pinimg.com/564x/3a/1f/9e/3a1f9e9898b27bd6522efb020eb5a34d.jpg"});
        localStorage.setItem("mySavedRecipes",JSON.stringify(recipes));
        console.log(recipes)
    }
}
