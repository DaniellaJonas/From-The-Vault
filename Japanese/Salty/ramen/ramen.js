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

    if(!recipes.find(recipe => recipe.name === "Ramen")){
        recipes.push({name:"Ramen", "link": ".././Japanese/Salty/Ramen/ramen.html", img: "https://static01.nyt.com/images/2024/01/10/multimedia/ND-Shoyu-Ramen-qflv/ND-Shoyu-Ramen-qflv-square640.jpg"});
        localStorage.setItem("mySavedRecipes",JSON.stringify(recipes));
        console.log(recipes)
    }
}