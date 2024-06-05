let header = document.getElementById("header-comp");
header.innerHTML = `
<center>
<div id="div1">
<div style="display: flex; justify-content: space-between; align-items: center;">
    <div align="left">
        <h1>From The Vault</h1>
    </div>
    <header>
        <div align="right" id="buttons">
            <button onclick="click1()" class="buttons" id="home">Home</button>
            <button onclick="click2()" class="buttons" id="about">Stats</button>
            <button onclick="click3()" class="buttons" id="mySavedRecipes">Saved Recipes</button>

        </div>
    </header>
</div>
</div>
</center>

<style>
.buttons {
    margin: auto;
    background-color: rgba(255, 245, 232, 0.425);
    border-radius: 5px;
    border-color: rgb(141, 0, 24);
}

.buttons:hover {
    background-color: rgba(255, 244, 228, 0.781);
}

#div1 {
    background-color: rgba(255, 244, 230, 0.63);
    width: 80%;
    height: 75px;
}

h1 {
    font-size: 30px;
}

#mySavedRecipes {
    width: 140px;
}

.buttons {
    background-color: rgba(240, 230, 217, 0.425);
    border-width: 0.07cm;
    cursor: pointer;
    border-color: rgb(141, 0, 24);
    border-radius: 15%;
    height: 30px;
    width: 80px;
    font-size: 15px;
    font-family: "Nova Mono", monospace;
    font-weight: 400;
    font-style: normal;
    color:rgb(141, 0, 24);

}

a:link {
    color: white;
}

#hamb {
    display: none;
}

@media screen and (max-width:800px) {
    #hamb {
        display: block;
    }
    #clickers {
        position: absolute;
        width: 50%;
        height: 100%;
        top: 10%;
        background-color: #FFDBDB;
        flex-direction: column;
        flex-wrap: wrap;
        right: 0;
        border-radius: 5px;
    }
    .link {
        display: block;
    }
    #clickers.responsive {
        display: block;
    }
    #buttons {
        display: flex;
        justify-content: space-between;
        position: relative;
        align-content: right;
        cursor: pointer;
    }
}
</style>`;

function showMenu() {
    let header = document.getElementById("clickers");
    header.classList.toggle("responsive");
}

function click1() {
    window.location.href = "../../../index.html";
}

function click2() {
    window.location.href = "../../../Stats/stats.html";
}

function click3() {
    window.location.href = "../../../My Saved Recipes/msr.html";
}

