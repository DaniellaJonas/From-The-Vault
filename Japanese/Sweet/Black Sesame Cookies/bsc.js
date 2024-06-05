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

    if(!recipes.find(recipe => recipe.name === "Black Sesame Cookies")){
        recipes.push({name:"Black Sesame Cookies", "link": ".././Japanese/Sweet/Black Sesame Cookies/bsc.html", img: "https://www.theflouredtable.com/wp-content/uploads/2021/10/Black-Sesame-Cookies-FP-1-1.jpg"});
        localStorage.setItem("mySavedRecipes",JSON.stringify(recipes));
        console.log(recipes)
    }
}