const display = document.getElementById("display");
const buttons = document.getElementById("buttons");


buttons.addEventListener("click", (event) => {
    let target = event.target;
    makeSound();

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
        } else display.value = "";
    }
});

// ---------------------------- click sound here 
function makeSound() {
    let audio = new Audio("./sound/sound.mp3"); //for sound
    audio.play();
}

// .................. power, sqrt, qube, percent, log, pi, sin , cos, tan, asin ,acos, atan
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

// ---------------------- factorials 
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

// ---------------------------------------------------set currect time 
function startTime() {
    var today = new Date();
    var hour = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    // time format
    // if (hour <= 12) {
    //     hour = hour
    // }
    // else {
    //     hour = hour - 12;
    // }
    // add zero if less than 10 
    hour = cancatZero(hour);
    minutes = cancatZero(minutes);
    seconds = cancatZero(seconds);

    // am pm mode
    // var mode = hour < 12 ? "AM" : "PM";
    var mode = hour >= 12 ? "PM" : "AM";
    // hour = hour % 12;
    // hour = hour ? hour : 12; // If hour is 0, set it to 12

    // var mode;
    // if (hour<12) {
    //     mode = "AM"
    // }
    // else {
    //     mode = "PM"
    // }

    document.getElementById("time").innerHTML = hour + ":" + minutes + ":" + seconds + ' ' + mode;
    setTimeout(startTime, 500)
}
// startTime();
// ..................................... add zero when hour, minutes, second less then 10 
function cancatZero(value) {
    if (value < 10) {
        value = '0' + value;
    }
    return value;
}
//-------------------------------------------- end setTime here ?

// ----------------------------------------- using keyboard perform oparetion here 
// Add event listener for keydown event
document.addEventListener("keydown", (event) => {
    KeyboardInput(event.key);
});

// Function to handle keyboard input
function KeyboardInput(key) {
    makeSound();

    const validKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "+", "-", "*", "/"];
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
function oparetionKeyboard() {
    if (display.value.length !== 0) {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = "Syntax Error!";
        }
    } else {
        display.value = "";
    }
}
// --------------------------------------------------------- end here /
// ---------------------------------------------------------close more opation after click button  
document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.getElementsByClassName('close');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', closeOptions);
    }
});

function closeOptions() {
    document.getElementById('open').style.display = 'none';
}
// ------------------------------------------------------------ end /
