"use strict";

let myInterval;
let speed = 250;
let animationText = "";

function startAnimation() {
    setAnimationText();
    fontSizeChange();
    const split = animationText.split("=====\n");
    let interval = 0;
    myInterval = setInterval((data) => {
        setValue("animationTextArea", data[0][interval]);
        if (data[0].length - 1 === interval) {
            interval = 0;
        } else {
            interval = interval + 1;
        }

    }, speed, [split])
    disableMe("startAnimation");
    enableMe("stopAnimation");
}

function stopAnimation() {
    clearInterval(myInterval);
    enableMe("startAnimation");
    disableMe("stopAnimation");
    setValue("animationTextArea", animationText);
}

function onAnimationTypeChange() {
    setAnimationText();
    stopAnimation();
}

function speedChange() {
    speed = findValue("turbo") ? 50 : 250;
}

function fontSizeChange() {
    const size = findValue("fontSize");
    const myElement = document.getElementById("animationTextArea");
    myElement.style.fontSize = size;
}

function disableMe(id) {
    console.log(document.getElementById(id))
    document.getElementById(id).setAttribute("disabled", "disabled");
}

function enableMe(id) {
    document.getElementById(id).removeAttribute("disabled");
}

function findValue(id) {
    return document.getElementById(id).value;
}

function setValue(id, value) {
    document.getElementById(id).value = value;
}

function setAnimationText() {
    const animationType = findValue("animationType");
    if (animationType === 'custom') {
        animationText = findValue("animationTextArea")
    }
    animationText = ANIMATIONS[animationType];
}