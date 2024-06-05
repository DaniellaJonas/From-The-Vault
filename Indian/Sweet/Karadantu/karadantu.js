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

    if(!recipes.find(recipe => recipe.name === "Karadantu")){
        recipes.push({name:"Karadantu", "link": ".././Indian/Sweet/Karadantu/karadantu.html", img: "https://i.pinimg.com/736x/70/c3/70/70c370f1c9ae52f036b7e69fb3b18854.jpg"});
        localStorage.setItem("mySavedRecipes",JSON.stringify(recipes));
        console.log(recipes)
    }
}
