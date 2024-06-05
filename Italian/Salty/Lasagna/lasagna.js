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

    if(!recipes.find(recipe => recipe.name === "Lasagna")){
        recipes.push({name:"Lasagna", "link": ".././Italian/Salty/Lasagna/lasagna.html", img: "https://shortgirltallorder.com/wp-content/uploads/2020/11/puttanesca-lasagna-square.jpg"});
        localStorage.setItem("mySavedRecipes",JSON.stringify(recipes));
        console.log(recipes)
    }
}
