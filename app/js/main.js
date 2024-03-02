window.addEventListener('DOMContentLoaded', ()=>{
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        // pagination: {
        //   el: '.swiper-pagination',
        // },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        
    });
  // document.querySelector('[data-inst="inst"]').style.height = "23rem";
  // console.log();
  
    const HeaderSticky = document.querySelector('.header-sticky'),
          sticky = HeaderSticky.offsetTop;
    console.log(sticky);
    window.addEventListener('scroll', ()=>{
      if (window.pageYOffset > 350) {
        HeaderSticky.classList.add("sticky")
      } else {
        HeaderSticky.classList.remove("sticky");
      }
      
    });


    const choose = document.querySelectorAll('.nav-menu'),
          choose_parent = document.querySelector('.nav-parent'),
          menu = document.querySelectorAll('.menu');

    function hideMenuContent() {
        menu.forEach(item =>{
          item.classList.remove('menu--show');
          item.classList.add('menu--hide');
        });
        choose.forEach(item =>{
          item.classList.remove('nav-menu--active');
        });
    }
    function showMenuContent(i=0) {
      menu[i].classList.remove('menu--hide');
      menu[i].classList.add('menu--show');
      choose[i].classList.add('nav-menu--active');
    }
    hideMenuContent();
    showMenuContent();
    //не работает, страница обновляется при нажатии на кнопки

    // for(const stage of choose){
    //   stage.addEventListener('click', ()=>{
    //     console.log(stage);
    //     hideMenuContent();
    //     showMenuContent(1);// nado i
    //   });
    // }


    choose_parent.addEventListener('click', (event)=>{
      const target = event.target;
      
      // event.preventDefault();
      // if(target.classList.contains('nav-menu')){}
      if (!target.closest(".nav-menu")) return
        
        // console.log(target); // dlya ponimaniya
        // console.log('SUKAAAAAAAAAA')
        choose.forEach((item, i)=>{
          if(target.closest(".nav-menu") == item.closest(".nav-menu")){
            // console.log(item); // dlya ponimaniya
            hideMenuContent();
            showMenuContent(i);
          }//da kakoi je ya suka sexualniy geniy prosto raziebalova!!!!!!
        });
      
    });
    //jquery owl carousel
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:30,
      nav:false,
      dots:true,
      stagePadding: 0,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:2
          }
      }
  })
})