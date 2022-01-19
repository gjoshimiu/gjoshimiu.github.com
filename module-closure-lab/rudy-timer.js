const rudyTimer = (function () {
    return setInterval(() => {
        document.getElementById("output").innerHTML = "Rudy!";
    }, 1000)
})();
