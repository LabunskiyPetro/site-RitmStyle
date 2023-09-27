const item = document.getElementsByClassName('slider__item')
const radio = document.getElementsByClassName('slider__radio')
const img_width = -(500 + 50);

function position(active){
    for(let i = 0; i < item.length; i++){
        if(active != i){
            item[i].classList.remove('slider__item_active');
            radio[i].style.opacity = '40%';
        }
        else{
            item[i].classList.add('slider__item_active')
            radio[i].style.opacity = '100%';
        }
        item[i].style.left = img_width * (active - 1)+ "px"
    }
}