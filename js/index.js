
let testimonials = document.querySelectorAll(".testimonial");
let testimonialIndex = 0;

function testimonialShow(index) {
  testimonials.forEach(function (element) {
    element.style.display = 'none';
  });
  testimonials[index].style.display = 'flex';
}

function testimonialAction(action) {
  switch (action) {
    case 'prev':
      testimonialIndex = (testimonialIndex == 0 ? 1 : 0);
      break;
    case 'next':
      testimonialIndex = (testimonialIndex == 1 ? 0 : 1);
      break;
    default:
      testimonialIndex = 0;
      break;
  }
  testimonialShow(testimonialIndex);
}

window.addEventListener('load', function () {
  testimonialShow(testimonialIndex);
});