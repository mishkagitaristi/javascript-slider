var Slider = {
    container : document.getElementById("slider"),
    items : document.getElementsByClassName("slider__item"),
    itemIndex : 0,
    prevBtn : document.getElementById("prev-btn"),
    nextBtn : document.getElementById('next-btn'),

    nextSlide: function (){
        Slider.items[Slider.itemIndex].classList.remove("slider__item--active");
        if (Slider.itemIndex == Slider.items.length-1){
            Slider.itemIndex = 0;
        }else {
            Slider.itemIndex++;
        }
        Slider.items[Slider.itemIndex].classList.add("slider__item--active");
    },

    prevSlide: function() {
        Slider.items[Slider.itemIndex].classList.remove("slider__item--active");
        if (Slider.itemIndex == 0){
            Slider.itemIndex = Slider.items.length-1;
        }else {
            Slider.itemIndex--;
        }
        Slider.items[Slider.itemIndex].classList.add("slider__item--active");
        
    }

}

Slider.prevBtn.addEventListener('click', Slider.prevSlide);
Slider.nextBtn.addEventListener('click', Slider.nextSlide);








