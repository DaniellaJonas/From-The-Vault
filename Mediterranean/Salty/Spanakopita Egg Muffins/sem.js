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

    if(!recipes.find(recipe => recipe.name === "Spanakopita Egg Muffins")){
        recipes.push({name:"Spanakopita Egg Muffins", "link": ".././Mediterranean/Salty/Spanakopita Egg Muffins/sem.html", img: "https://i.pinimg.com/564x/24/df/98/24df982aa3a6317f894938e732e5ec72.jpg"});
        localStorage.setItem("mySavedRecipes",JSON.stringify(recipes));
        console.log(recipes)
    }
}
