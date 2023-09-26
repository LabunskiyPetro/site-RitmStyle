const rad = document.getElementsByClassName('slider-image')
const img_width = -(500 + 50);
const steep = [-img_width, 0, img_width, 2*img_width]

function position(active){
    for(let i = 0; i < rad.length; i++){
        rad[i].classList.remove('slider-image_active');
        rad[i].style.left = steep[active]+ "px"
    }
    rad[active].classList.add('slider-image_active')
}