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

    if(!recipes.find(recipe => recipe.name === "Arancini")){
        recipes.push({name:"Arancini", "link": ".././Italian/Sweet/Cannoli/cannoli.html", img: "https://i.pinimg.com/564x/ed/76/3d/ed763d77c16ecaadace1793ac7a4b44b.jpg"});
        localStorage.setItem("mySavedRecipes",JSON.stringify(recipes));
        console.log(recipes)
    }
}
