var character = document.getElementById("character");
var character_img = document.getElementById("character_img");
var block = document.getElementById("block");
var block_img = document.getElementById("block_img");
var game = document.getElementById("game");
var resultado = document.getElementById("resultado");
var total = 0;
var perdeu = 0;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

function jump(){
    if(character.classList != "animate"){
        character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    }, 500)
}

function play(){
    if(block.classList != "aniBlock"){
        var n = getRandomInt(1,4)
        block.classList.add("aniBlock"+n);
        game.style.backgroundImage = "url(img/site/CenarioGame6.png)"
        checkPontos();
    }
}

function refresh(){
    document.location.reload(true)
}

var checkDead = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if(blockLeft<310 && blockLeft>250 && characterTop>=260){
        block.style.animation = "none";
        block.style.display = "none";
        game.style.backgroundImage = "url(img/site/CenarioGameMiss6.png)"
        character_img.src = "img/site/characterMiss.png"
        perdeu = 1;
    }

},10);

function checkPontos(){
    var contagem = setInterval(function(){

        console.log(perdeu)

        if(perdeu != 0){
            console.log("teste")
            clearInterval(contagem);
        }else{
            total += 5;
            resultado.innerHTML = total;
    
            if(total == 20){
                block.style.animation = "none";
                block.style.display = "none";
                game.style.backgroundImage = "url(img/site/CenarioGameOk6.png)"
                character_img.src = "img/site/characterOk.png"
                clearInterval(contagem);
            }
        }

    },4000);

}