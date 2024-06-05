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

    if(!recipes.find(recipe => recipe.name === "Fried Frog Legs")){
        recipes.push({name:"Fried Frog Legs", "link": ".././French/Salty/Fried Frog Legs/ffl.html", img: "https://i.pinimg.com/564x/72/ef/ea/72efea3d73ca629a4557008b23a2db34.jpg"});
        localStorage.setItem("mySavedRecipes",JSON.stringify(recipes));
        console.log(recipes)
    }
}
