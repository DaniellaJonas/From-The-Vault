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

    if(!recipes.find(recipe => recipe.name === "Matcha Swiss Roll Cake")){
        recipes.push({name:"Matcha Swiss Roll Cake", "link": ".././Japanese/Sweet/Matcha Swiss Roll Cake/msrc.html", img: "https://www.siftandsimmer.com/wp-content/uploads/2023/01/matcha-swiss-roll-cake-featured.jpg"});
        localStorage.setItem("mySavedRecipes",JSON.stringify(recipes));
        console.log(recipes)
    }
}