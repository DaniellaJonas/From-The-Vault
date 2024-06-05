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

    if(!recipes.find(recipe => recipe.name === "Loukoumades")){
        recipes.push({name:"Loukoumades", "link": ".././Mediterranean/Sweet/Loukoumades/loukoumades.html", img: "https://veenaazmanov.com/wp-content/uploads/2022/12/Loukoumades-Greek-Honey-Donuts8.jpg"});
        localStorage.setItem("mySavedRecipes",JSON.stringify(recipes));
        console.log(recipes)
    }
}