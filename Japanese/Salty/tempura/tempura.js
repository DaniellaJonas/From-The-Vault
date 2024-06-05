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

    if(!recipes.find(recipe => recipe.name === "Tempura")){
        recipes.push({name:"Tempura", "link": ".././Japanese/Salty/Tempura/tempura.html", img: "https://www.allrecipes.com/thmb/xWetQsyyrT2R0V4hgS00m2961Hk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/129467-crispy-shrimp-tempura-ddmfs-4x3-1279-0d2e8debf0e04481acb89f60366bd405.jpg"});
        localStorage.setItem("mySavedRecipes",JSON.stringify(recipes));
        console.log(recipes)
    }
}