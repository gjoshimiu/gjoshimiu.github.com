window.onload = initializeAllHandlers;

function initializeAllHandlers() {
    let button = document.getElementById("bigger");
    button.onclick = clickListener;

    let igpayButton = document.getElementById("igpay");
    igpayButton.onclick = igpayButtonListener;

    let malkovitchButton = document.getElementById("malkovitch");
    malkovitchButton.onclick = malkovitchButtonListener;

    let checkBox = document.getElementById("bling");
    checkBox.onchange = blingFunctionality;
}

function clickListener() {
    setInterval(increaseFontSize, 500);
}

function increaseFontSize() {
    let textArea = document.getElementById("textarea");
    let fontSize = textArea.style.fontSize;
    if (fontSize === "") {
        textArea.style.fontSize = "18px"
    } else {
        textArea.style.fontSize = parseInt(fontSize) + 2 + "px";
    }
}

function igpayButtonListener() {
    let textArea = document.getElementById("textarea");
    let str = textArea.value;
    let strArr = str.split(' ');
    let pigLatin = [];
    for (let word of strArr) {
        if ((/([a-zA-Z])/).test(word)) {
            pigLatin.push(word.substring(1) + word[0] + "ay");
        } else {
            pigLatin.push(word);
        }
    }
    textArea.value = pigLatin.join(" ");
}

function malkovitchButtonListener() {
    let textArea = document.getElementById("textarea");
    let text = textArea.value;
    let words = text.split(' ');
    let malkovich = [];
    for (let word of words) {
        if (word.length >= 5) malkovich.push('Malkovich'); else malkovich.push(word);
    }
    textArea.value = malkovich.join(" ");
}

function blingFunctionality() {
    let checked = document.getElementById("bling").checked;
    let textArea = document.getElementById("textarea");
    let pageBody = document.getElementById("body");
    if (checked) {
        textArea.style.color = "green";
        textArea.style.fontWeight = "bold"
        textArea.style.textDecoration = "underline";
        pageBody.style.backgroundImage = "url('https://cdn5.vectorstock.com/i/1000x1000/16/79/blurred-lights-background-wallpaper-design-vector-9731679.jpg')";
    } else {
        textArea.style.color = "black";
        textArea.style.fontWeight = "normal"
        textArea.style.textDecoration = "none";
        pageBody.style.backgroundImage = "none";
    }
}