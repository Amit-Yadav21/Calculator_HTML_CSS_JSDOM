const display = document.getElementById("display");
const buttons = document.getElementById("buttons"); 

// ================================== here only onclick oparetion perform on browser 
buttons.addEventListener("click", (event) => {
    let target = event.target;
    ClickSound();
    // -------------
    if (target.innerHTML === "AC") {
        display.value = "";
    }
    else if (target.classList.contains("clear")) {
        let str = "";
        let i = 0;
        while (i <= display.value.length - 2) {
            str += display.value[i]
            i++;
        }
        display.value = str;
    }
    else if (target.classList.contains("number")) {
        display.value += target.innerHTML;
    }
    else if (target.classList.contains("operator")) {
        let lastChar = display.value[display.value.length - 1]; //last character of string
        if (["+", "-", "*", "/"].includes(lastChar)) {
            display.value = display.value.slice(0, -1) + target.innerHTML; //eliminates repeated operators
        } else {
            display.value += target.innerHTML;
        }
    }
    else if (target.innerHTML === "=") {
        if (display.value.length !== 0) {
            //handling unexpected syntax expressions
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = "Syntax Error!";
            }
        } else display.value = "First Perform Operation...";
    }
});
// ====================================================== End here :- 

// ====================== click sound here 
function ClickSound() {
    let audio = new Audio("./sound/sound.mp3"); //for sound
    audio.play();
}
// ====================================================== End here :-

// ================ power, sqrt, qube, percent, log, pi, sin , cos, tan, asin ,acos, atan
function pow() {
    display.value = Math.pow(display.value, 2);
}

function sqr() {
    display.value = Math.sqrt(display.value, 2);
}

function qube() {
    display.value = Math.pow(display.value, 3);
}
function percent() {
    display.value = (display.value / 100);
}
function log() {
    display.value = Math.log10(display.value);
}

function pi() {
    display.value = 3.14159265359;
}
function sin() {
    display.value = Math.sin(display.value * Math.PI / 180);
}
function cos() {
    display.value = Math.cos(display.value * Math.PI / 180);
}
function tan() {
    display.value = Math.tan(display.value * Math.PI / 180);
}
function asin() {
    display.value = Math.asin(display.value) * (180 / Math.PI);
}
function acos() {
    display.value = Math.acos(display.value) * (180 / Math.PI);
}
function atan() {
    display.value = Math.atan(display.value) * (180 / Math.PI);
}
// ===================================================== End here :-

// ================================ factorials operation 
function fact() {
    var i, num, f;
    f = 1;
    num = display.value;
    for (i = 1; i <= num; i++) {
        f = f * i
    }
    i = i - 1;
    display.value = f;
}
// ========================================================= end here :-

// ==================================== set currect time 
function startTime() {
    var today = new Date();
    var hour = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    // --------------------------------------- am pm mode
    // hour = hour % 12;
    var mode = hour >= 11 ? "PM" : "AM";

    // -------------------------add zero if less than 10 
    hour = addZero(hour);
    minutes = addZero(minutes);
    seconds = addZero(seconds);

    document.getElementById("time").innerHTML = hour + ":" + minutes + ":" + seconds + ' ' + mode;
    setTimeout(startTime, 500)
}
// startTime();
// ..................................... add zero when hour, minutes, second less then 10 
function addZero(value) {
    if (value < 10) {
        value = '0' + value;
    }
    return value;
}
// ================================================= end setTime here :-

// ======================= using keyboard perform oparetion here 
// Add event listener for keydown event
document.addEventListener("keydown", (event) => {
    KeyboardInput(event.key);
});

// Function to handle keyboard input
function KeyboardInput(key) {
    ClickSound();

    const validKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "+", "-", "*", "/","(",")","%"];
    if (validKeys.includes(key)) {
        display.value += key;
    } else if (key === "Escape" || key === "Delete") {
        // clear all using Esc button or Delete button on the keyboard
        display.value = "";
    } else if (key === "Backspace") {
        // clear one by one using Backspace button on the keyboard
        display.value = display.value.slice(0, -1);
    } else if (key === "Enter") {
        oparetionKeyboard();
    } else {
        // Ignore other keys
    }

}
// ------------------------------------- press Enter button on keyboard get result 
function oparetionKeyboard() {
    if (display.value.length !== 0) {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = "Syntax Error!";
        }
    } else {
        display.value = "Frist Perform Operation...";
    }
}
// ======================================================== end here :-

// ========== if click and choose in more option , click after close more option  
document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.getElementsByClassName('close');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', closeOptions);
    }
});

function closeOptions() {
    document.getElementById('open').style.display = 'none';
}
// ========================================================== end  here :-
