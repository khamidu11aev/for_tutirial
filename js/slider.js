let offset = 0; 

const sliderLine= document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function(){
    offset = offset + 696;
    if (offset > 696) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});


document.querySelector('.slider-prev').addEventListener('click', function(){
    offset = offset - 696;
    if (offset < 0) {
        offset = 696;
    }
    sliderLine.style.left = -offset + 'px';
});