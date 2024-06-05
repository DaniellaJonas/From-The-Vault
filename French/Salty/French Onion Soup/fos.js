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

    if(!recipes.find(recipe => recipe.name === "French Onion Soup")){
        recipes.push({name:"French Onion Soup", "link": ".././French/Salty/French Onion Soup/fos.html", img: "https://i.pinimg.com/564x/ef/4a/44/ef4a44996c5fb33dcd9041618d8ccc4c.jpg"});
        localStorage.setItem("mySavedRecipes",JSON.stringify(recipes));
        console.log(recipes)
    }
}
