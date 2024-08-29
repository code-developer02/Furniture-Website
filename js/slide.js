$(document).ready(function(){
    var currentIndex = 0;
    var slideCount = $('.slide-link-item').length;
    var slideWidth = $('.slide-link-item').width();
    var slides = $('.slide-link-div-packet');

    console.log("jQuery initialized");

    function showSlide(index) {
        var offset = -index * slideWidth;
        slides.css('transform', 'translateX(' + offset + 'px)');
        console.log(offset);
    }

    function autoSlide() {
        if(currentIndex ==slideCount){
            currentIndex = (currentIndex - 1) % slideCount;
        showSlide(currentIndex);
        }else{
            currentIndex = (currentIndex + 1) % slideCount;
        showSlide(currentIndex);
        }
        
    }

    showSlide(currentIndex);

    setInterval(autoSlide, 3000);
});