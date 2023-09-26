const rad = document.getElementsByClassName('slider__image')
const rad1 = document.getElementsByClassName('slider__radio')
const img_width = -(500 + 50);

function position(active){
    for(let i = 0; i < rad.length; i++){
        rad[i].classList.remove('slider__image_active');
        rad[i].style.left = img_width * (active - 1)+ "px"
        
        rad1[i].style.opacity = '40%';
    }
    
    rad[active].classList.add('slider__image_active')
    rad1[active].style.opacity = '100%';
}