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

    if(!recipes.find(recipe => recipe.name === "Dijon Chicken")){
        recipes.push({name:"Dijon Chicken", "link": ".././French/Salty/Dijon Chicken/dc.html", img: "https://i.pinimg.com/564x/fd/81/30/fd8130ec7377801dd7818423ee99a6a9.jpg"});
        localStorage.setItem("mySavedRecipes",JSON.stringify(recipes));
        console.log(recipes)
    }
}
