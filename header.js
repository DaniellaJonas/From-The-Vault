let header = document.getElementById("header-comp") 
header.innerHTML = 

`    
<center>
<div id="div1">
<div align = "left">
<h1> From The Vault </h1>
<svg id="hamb" onclick="showMenu()" height="60px" id="Layer_1" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>

</div>


<header>
<div align = "right" id="clickers">
<button onclick="clicky1()"; class="buttons" id="home" >Home</button>
<button onclick="clicky2()"; class="buttons" id="about" >Stats</button>
<button onclick="clicky3()"; class="buttons" id="chart" >About</button>
</div>
</header>

</div>
</center>

<style>
.buttons{
    margin: auto;
    background-color: rgba(255, 245, 232, 0.425);
    // padding: 10px;
    border-radius: 5px;
    border-color: rgb(141, 0, 24);
}

.buttons:hover {
    background-color: rgba(255, 244, 228, 0.781);
    }

#div1{
    background-color: rgb(255, 240, 220);
    width: 1400px;
    height: 100px;
  }

h1{
    font-size: 30px;
}

a:link {
    color:white;
}



#hamb {
    display: none;
}

@media screen and (max-width:800px){
    #hamb {
        display: block;
    }
    #clickers{
        position: absolute;
        weight: 50%;
        height: 100%;
        top: 10%;
        background-color: #FFDBDB;
        flex-direction: column;
        flex-wrap: wrap;
        right: 0;
        border-radius: 5px;  
    }
    .link{
        display: block;
    }
    #clickers.responsive{
        display: block;
    }

    #clickers {
        display: none;
    }
    }
}

<style/>`

function showMenu(){
    let = header = document.getElementById("clickers")
    header.classList.toggle("responsive")
}

function clicky1(){
    window.location.href="index.html";
}
    
function clicky2(){
    window.location.href="aboutme.html";
}

function clicky3(){
    window.location.href="chart.html";
}