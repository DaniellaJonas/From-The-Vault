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

    if(!recipes.find(recipe => recipe.name === "Tzatziki")){
        recipes.push({name:"Tzatziki", "link": ".././Mediterranean/Salty/Tzatziki/tzatziki.html", img: "https://cdn.loveandlemons.com/wp-content/uploads/2019/07/IMG_19397-cropped-500x500.jpg"});
        localStorage.setItem("mySavedRecipes",JSON.stringify(recipes));
        console.log(recipes)
    }
}
