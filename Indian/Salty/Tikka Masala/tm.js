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

    if(!recipes.find(recipe => recipe.name === "Tikka Masala")){
        recipes.push({name:"Tikka Masala", "link": ".././Indian/Salty/Tikka Masala/tm.html", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE_jxW7GIhqQ5V_bI-IGjkGeFhIBjHOsPuUg&s"});
        localStorage.setItem("mySavedRecipes",JSON.stringify(recipes));
        console.log(recipes)
    }
}