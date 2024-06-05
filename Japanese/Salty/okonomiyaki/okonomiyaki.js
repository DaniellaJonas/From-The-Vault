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

    if(!recipes.find(recipe => recipe.name === "Okonomiyaki")){
        recipes.push({name:"Okonomiyaki", "link": ".././Japanese/Salty/Okonomiyaki/okonomiyaki.html", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZAdALfhyx7ww0Jrp3JblZCs2a_hiUUYesaA&s"});
        localStorage.setItem("mySavedRecipes",JSON.stringify(recipes));
        console.log(recipes)
    }
}