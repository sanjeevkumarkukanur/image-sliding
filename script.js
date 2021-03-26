window.onload = function(){
    let counter = 1;
    setInterval(function(){
        document.querySelector('#radio'+counter).checked = true;
        counter++;
        if(counter>5){
            counter = 1
        }
    },1000)
}