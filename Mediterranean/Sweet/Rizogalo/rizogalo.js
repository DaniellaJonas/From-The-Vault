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

    if(!recipes.find(recipe => recipe.name === "Rizogalo")){
        recipes.push({name:"Rizogalo", "link": ".././Mediterranean/Sweet/Rizogalo/rizogalo.html", img: "https://i.pinimg.com/564x/a8/e9/2c/a8e92c3d22bfeafe83754d64df35d4b8.jpg"});
        localStorage.setItem("mySavedRecipes",JSON.stringify(recipes));
        console.log(recipes)
    }
}
