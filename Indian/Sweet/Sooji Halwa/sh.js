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

    if(!recipes.find(recipe => recipe.name === "Sooji Halwa")){
        recipes.push({name:"Sooji Halwa", "link": ".././Indian/Sweet/Sooji Halwa/sh.html", img: "https://rakskitchen.net/wp-content/uploads/2021/12/sooji-ka-halwa-recipe.jpg"});
        localStorage.setItem("mySavedRecipes",JSON.stringify(recipes));
        console.log(recipes)
    }
}