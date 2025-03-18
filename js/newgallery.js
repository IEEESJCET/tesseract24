document.addEventListener('DOMContentLoaded', () => {
    // Initialize the thumbnail swiper
    const thumbSwiper = new Swiper('.gallery-slider.thumbs .swiper-container', {
      spaceBetween: 10,
      slidesPerView: 4,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 3,
          spaceBetween: 5
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 4,
          spaceBetween: 10
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 5,
          spaceBetween: 10
        }
      }
    });
  
    // Initialize the main swiper
    const mainSwiper = new Swiper('.gallery-slider.main .swiper-container', {
      spaceBetween: 10,
      speed: 1000,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.gallery-nav-next',
        prevEl: '.gallery-nav-prev',
      },
      thumbs: {
        swiper: thumbSwiper
      },
      // Enable lazy loading
      lazy: {
        loadPrevNext: true,
      },
      // Add keyboard control
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      }
    });
  
    // Add hover pause functionality
    const swiperContainer = document.querySelector('.gallery-slider.main .swiper-container');
    
    swiperContainer.addEventListener('mouseenter', () => {
      mainSwiper.autoplay.stop();
    });
  
    swiperContainer.addEventListener('mouseleave', () => {
      mainSwiper.autoplay.start();
    });
  
    // Generate thumbnails dynamically
    const mainSlides = document.querySelectorAll('.gallery-slider.main .swiper-slide');
    const thumbsWrapper = document.querySelector('.gallery-slider.thumbs .swiper-wrapper');
  
    mainSlides.forEach((slide, index) => {
      const thumbSlide = document.createElement('div');
      thumbSlide.className = 'swiper-slide';
      
      const img = slide.querySelector('img').cloneNode(true);
      img.style.width = '100%';
      img.style.height = '100%';
      img.style.objectFit = 'cover';
      
      thumbSlide.appendChild(img);
      thumbsWrapper.appendChild(thumbSlide);
    });
  
    // Update Swiper after dynamic content addition
    thumbSwiper.update();
    mainSwiper.update();
  });