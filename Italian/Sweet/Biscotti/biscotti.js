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

    if(!recipes.find(recipe => recipe.name === "Biscotti")){
        recipes.push({name:"Biscotti", "link": ".././Italian/Sweet/Biscotti/biscotti.html", img: "https://www.barleyandsage.com/wp-content/uploads/2022/04/pistachio-biscotti-1200x1200-1-500x500.jpg"});
        localStorage.setItem("mySavedRecipes",JSON.stringify(recipes));
        console.log(recipes)
    }
}
