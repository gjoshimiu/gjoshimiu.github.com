let rudyTimer = (function () {
    let timer=null;

    return function print(){
      if(timer===null){
          timer=setInterval(() => {
              document.getElementById("output").innerHTML = "Rudy!";
          }, 1000)
      }else {
          clearInterval(timer);
          timer=null;
      }
    }
})();
