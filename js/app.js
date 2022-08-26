const whiteButton=document.getElementById("white");
const greenButton=document.getElementById("green");
const darkMode=document.getElementsByClassName("dark-img");
const lightMode=document.getElementsByClassName("light-img");


const body=document.body;
let className=document.body.className;
const theme=localStorage.getItem('theme')

if(theme){
    body.classList.replace(className,theme);
    className=theme;
}


greenButton.onclick=() => {
    body.classList.replace(className, 'green');
    className= 'green';
    localStorage.setItem('theme', 'green');
    greenButton.style.display = 'none';
    whiteButton.style.display = 'block'
}




whiteButton.onclick=() => {
    body.classList.replace(className, 'white');
    className= 'white';
    localStorage.setItem('theme', 'white');
    whiteButton.style.display = 'none';
    greenButton.style.display = 'block';
}
