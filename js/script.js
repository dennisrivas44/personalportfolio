const button1 = document.querySelector('#button1');

button1.onclick = update;

function update(){
    button1.innerHTML = '<a href="mailto:dennisrivas44@gmail.com" target="_blank">dennisrivas44@gmail.com</a>';
 
    button1.style.width = "50%";
    button1.style.color = "white";
}