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

    if(!recipes.find(recipe => recipe.name === "Crêpe")){
        recipes.push({name:"Crêpe", "link": ".././French/Sweet/Crêpe/crêpe.html", img: "https://i.pinimg.com/564x/33/91/8b/33918bdb0ab409af1c762f1dc467cf2e.jpg"});
        localStorage.setItem("mySavedRecipes",JSON.stringify(recipes));
        console.log(recipes)
    }
}
