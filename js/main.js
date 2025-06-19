$(function () {

  // $(window).scrollTop(0);

  //main_visual slide

  let main1swiper = new Swiper(".main1", {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".main1 .swiper-pagination",
      clickable: true,
    }
  });


  let main2swiper = new Swiper(".main2", {
    direction: "vertical",
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".main2 .swiper-pagination",
      clickable: true,
    }
  });

  //goods slide
  let goodsswiper = new Swiper(".product_all", {
 /*    effect: "coverflow", */
    // centeredSlides: true,
    slidesPerView: "auto",
    loop:true,
    
/*     coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }, */
    navigation: {
      nextEl: ".arrow .right",
      prevEl: ".arrow .left",
    },
  });

  //story slide
  let storyswiper = new Swiper(".story .mySwiper", {
    effect: "fade",
    loop: true,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    navigation: {
      nextEl: ".bottom_all .next",
      prevEl: ".bottom_all .prev",
    },
  });



  let num = 0;
  $(".events .events_all .scroll_all ul li .heart img").click(function () {
    if (num == 0) {
      $(this).attr("src", "img/pc/events/heart_on.png");
      num = 1;
    } else {
      $(this).attr("src", "img/pc/events/heart_off.png");
      num = 0;
    }
  });


  //brand_all slide
  let brandswiper = new Swiper(".brand_all .mySwiper", {
    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: true,
    // autoplay: {
    //   delay: 500,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: ".brand_all .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".brand_all .right_button",
    },
  });

}); //ready end
