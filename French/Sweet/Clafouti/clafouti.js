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

    if(!recipes.find(recipe => recipe.name === "Clafouti")){
        recipes.push({name:"Clafouti", "link": ".././French/Sweet/Clafouti/clafouti.html", img: "https://i.pinimg.com/564x/c1/c6/ca/c1c6ca69b3f320592b5cc7abc0af52b4.jpg"});
        localStorage.setItem("mySavedRecipes",JSON.stringify(recipes));
        console.log(recipes)
    }
}