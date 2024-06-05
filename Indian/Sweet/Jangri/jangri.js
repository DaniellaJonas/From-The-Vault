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

    if(!recipes.find(recipe => recipe.name === "Jangri")){
        recipes.push({name:"Jangri", "link": ".././Indian/Sweet/Jangri/jangri.html", img: "https://vellankifoods.com/cdn/shop/products/jangri_ghee.jpg?v=1680180402"});
        localStorage.setItem("mySavedRecipes",JSON.stringify(recipes));
        console.log(recipes)
    }
}