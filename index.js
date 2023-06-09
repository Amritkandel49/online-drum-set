// document.querySelectorAll("button")[0].addEventListener("click", handleClick);

document.addEventListener("keydown", event => {
    if (event.key === 'w') {
      handleClick_W();
    }
    else if (event.key === 'a') {
        handleClick_A();
      }
    else if (event.key === 's') {
        handleClick_S();
      }
    else if (event.key === 'd') {
        handleClick_D();
      }
    else if (event.key === 'j') {
        handleClick_J();
      }
    else if (event.key === 'k') {
        handleClick_K();
      }
    else if (event.key === 'l') {
        handleClick_L();
      }

    }
)


function handleClick_W(){
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
}

function handleClick_A(){
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
}

function handleClick_S(){
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
}

function handleClick_D(){
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
}

function handleClick_J(){
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
}

function handleClick_K(){
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
}

function handleClick_L(){
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
}