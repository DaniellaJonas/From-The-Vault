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

    if(!recipes.find(recipe => recipe.name === "Curry")){
        recipes.push({name:"Curry", "link": ".././Indian/Salty/Curry/curry.html", img: "https://i.pinimg.com/564x/b2/72/0a/b2720ab6c69a7a9200906eb3b882a491.jpg"});
        localStorage.setItem("mySavedRecipes",JSON.stringify(recipes));
        console.log(recipes)
    }
}