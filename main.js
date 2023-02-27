function newTime () {
    let newTime = new Date();

    document.querySelector('.hour').textContent = newTime.getHours();
    document.querySelector('.minutes').textContent = newTime.getMinutes();
    document.querySelector('.second').textContent = newTime.getSeconds();
}

newTime();

setInterval(function (){
    newTime();
})