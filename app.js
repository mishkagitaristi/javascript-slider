var Slider = {
    container : document.getElementById("slider"),
    items : document.getElementsByClassName("slider__item"),
    itemIndex : 0,
    prevBtn : document.getElementById("prev-btn"),
    nextBtn : document.getElementById('next-btn'),

    nextSlide: function (e){
        
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
    },
    keyboard: function(event){
        var key = event.keyCode;
        switch(key){
            case 37:
                Slider.prevSlide();
                break;
            case 39: 
                Slider.nextSlide();

        }
    }

}

Slider.prevBtn.addEventListener('click', Slider.prevSlide);
Slider.nextBtn.addEventListener('click', Slider.nextSlide);

document.addEventListener('keydown', Slider.keyboard);



var elem = document.getElementById("main");

function openFullscreen() {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { 
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { 
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { 
      elem.msRequestFullscreen();
    }
  }