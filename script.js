let color1 = document.getElementById('color1');
let color2 = document.getElementById('color2');
let crgb1 = document.getElementById('crgb1');
let crgb2 = document.getElementById('crgb2');


function degrade(){
    document.body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    crgb1.textContent = color1.value;
    crgb2.textContent = color2.value;
}

color1.addEventListener("input", degrade);
color2.addEventListener('input', degrade);


