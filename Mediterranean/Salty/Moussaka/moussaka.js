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

    if(!recipes.find(recipe => recipe.name === "Moussaka")){
        recipes.push({name:"Moussaka", "link": ".././Mediterranean/Salty/Moussaka/moussaka.html", img: "https://i.pinimg.com/236x/1d/68/36/1d6836c508d83fa15ea09e018d95f0d3.jpg"});
        localStorage.setItem("mySavedRecipes",JSON.stringify(recipes));
        console.log(recipes)
    }
}
