$(".testimo-slider").owlCarousel({
  loop: false,
  rewind: true,
  margin: 14,
  autoplay: false,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 3,
      nav: false,
    },
    1000: {
      items: 3,
      nav: true,
      loop: false,
    },
  },
});

//   changing icons for prev and next buttons for testimo slider

const next = document.querySelector('[aria-label="Next"]');
const prev = document.querySelector('[aria-label="Previous"]');

next.innerHTML = "&#8594";
next.parentElement.style.backgroundColor = "rgba(14, 82, 149, 1)";
next.style.color = "white";
prev.innerHTML = "&#8592";
