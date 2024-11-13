const swiper = new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30, // Corrected the typo here
    
    // Pagination bullet
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // Responsive breakpoints
    breakpoints: {
      0: {
        slidesPerView: 1, // Show 1 slide at a time for small screens
      },
      768: {
        slidesPerView: 2, // Show 2 slides at a time for tablets or larger screens
      },
      1024: {
        slidesPerView: 3, // Show 3 slides at a time for desktop or larger screens
      },
    }
  });
  