
var clicks = 0;
function onClick(){
    const poga = document.getElementById("poga");
    var klucis = document.getElementById("klucis");

    clicks += 1;
    poga.textContent = "Clicks: " + clicks;

    klucis.style.backgroundColor = '#'+ Math.floor(Math.random()*16777215).toString(16);

    const randomRotation = Math.floor(Math.random() * 360);
    klucis.style.transform += `rotate(${randomRotation}deg)`;


    const maxX = document.getElementById("laukums").offsetWidth - klucis.offsetWidth;
    const maxY = document.getElementById("laukums").offsetHeight - klucis.offsetHeight;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    klucis.style.left = `${randomX}px`;
    klucis.style.top = `${randomY}px`;
}