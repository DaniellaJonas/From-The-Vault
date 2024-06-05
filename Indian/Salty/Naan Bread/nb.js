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

    if(!recipes.find(recipe => recipe.name === "Naan Bread")){
        recipes.push({name:"Naan Bread", "link": ".././Indian/Salty/Naan Bread/nb.html", img: "https://i.pinimg.com/564x/f2/28/b9/f228b94eca9321ce6c36a0253d333178.jpg"});
        localStorage.setItem("mySavedRecipes",JSON.stringify(recipes));
        console.log(recipes)
    }
}
