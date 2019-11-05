const navSlide = ()=> {
    const  burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

    //Toggle Navs 

    burger.addEventListener('click', ()=> {
        nav.classList.toggle('nav-active');
    });
}
// alert('welcome to Tech Com click OK to continue')
// //burger animation

// burger.classList.toggle('toggle');


navSlide();

// $(function(){
//   var documentEL = $(document),
//   fadeElem = $('fadeIn');

//   documentEL.on('scroll', function() {
//     var currScrollPos = documenEl.scrollTop();
//     fadeElem.each(function() {
//       var $this = $(this),
//       elemOffsetTop = $this.offset().top;
//       if (currScrollPos > elemOffestTop) $this.css('opacity', 1 = {currScrollPos = elemOffsetTop}/400);
//     });
//   });
// });

// var slide_index = 1;
// displaySlides(slide_index)

// function nextSlide(n) {
//     displaySlides(slide_index + = n);
    
// }
// function currentSlide(n) {
//     displaySlides(slide_index = n)
// }

// function displaySlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("showSlide");
//     if (n > slides.length)  {slide_index = 1}
//     if (n < 1) {slides.length; i ++}
//     for (i = 0; i < slides.length; i++){
//         slides[i].style.display = "none";   
//     }
//     slides[slides_index - 1].style.display = "block";
        
//     }

// }
// $(function() {
//     $('body').removeClass('fade-out');
// });
// document.body.className += ' fade-out';






  //Animate Links
    // navLinks.forEach(link, index);=> {     
        // link.style.animation=`nav-linkFade 0.5s ease forwards ${index} / 7 + 1.5}s`                                                                                 
    // });

    //burger animation

// burger.classList.toggle('toggle');
