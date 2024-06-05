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

    if(!recipes.find(recipe => recipe.name === "Cannoli")){
        recipes.push({name:"Cannoli", "link": ".././Italian/Sweet/Cannoli/cannoli.html", img: "https://houseofnasheats.com/wp-content/uploads/2023/06/Cannoli-Recipe-Square-1.jpg"});
        localStorage.setItem("mySavedRecipes",JSON.stringify(recipes));
        console.log(recipes)
    }
}
