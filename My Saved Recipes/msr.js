const SavedRs = JSON.parse(localStorage.getItem("mySavedRecipes"));
console.log(SavedRs);

function clearRecipes() {
    document.getElementById("recipeContainer").innerHTML = "";
    localStorage.clear();
}

let recipeContainer = document.getElementById('recipeContainer');
for (let i = 0; i < SavedRs.length; i++) { 
    let recipeName = document.createElement('h2'); 
    recipeName.textContent = SavedRs[i].name; 

    let recipeLink = document.createElement('a'); 
    recipeLink.textContent = "View Recipe"; 
    recipeLink.href = SavedRs[i].link; 
    recipeLink.target = "_blank"; 

    let linkButton = document.createElement('button'); 
    linkButton.appendChild(recipeLink);

    linkButton.style.backgroundColor = 'rgba(240, 230, 217, 0.425)';
    linkButton.style.borderWidth = '0.07cm';
    linkButton.style.cursor = 'pointer';
    linkButton.style.borderColor = 'rgb(141, 0, 24)';
    linkButton.style.borderRadius = '15%';
    linkButton.style.height = '30px';
    linkButton.style.fontSize = '15px';
    linkButton.style.fontFamily = '"Nova Mono", monospace';
    linkButton.style.fontWeight = '400';
    linkButton.style.fontStyle = 'normal';
    linkButton.style.color = 'rgb(141, 0, 24)';

    let recipeImage = document.createElement('img'); 
    recipeImage.src = SavedRs[i].img;
    recipeImage.alt = SavedRs[i].name; 
    recipeImage.id = "recipeImg";

    // image size
    recipeImage.setAttribute('width', '200');
    recipeImage.setAttribute('height', '200');
    
    let lineBreak1 = document.createElement('br');
    let lineBreak2 = document.createElement('br');
    let lineBreak3 = document.createElement('br');

    recipeLink.style.color = 'rgb(141, 0, 24)';

    recipeContainer.appendChild(recipeName); 
    recipeContainer.appendChild(linkButton); 
    recipeContainer.appendChild(lineBreak1);
    recipeContainer.appendChild(lineBreak2);
    recipeContainer.appendChild(recipeImage);
    recipeContainer.appendChild(lineBreak3);
}
