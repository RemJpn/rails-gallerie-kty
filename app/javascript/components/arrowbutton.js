const handleClick = (event) => {
  const slider = event.currentTarget.parentElement.querySelector('.slider-cards');

  if (event.currentTarget.classList.contains('next')) slider.scrollLeft += 500;
  if (event.currentTarget.classList.contains('prev')) slider.scrollLeft -= 500;

}

const handleScroll = (event) => {
  const slider = event.currentTarget;
  const next = slider.parentElement.querySelector('.next');
  const prev = slider.parentElement.querySelector('.prev');

  if (slider.scrollLeft === 0) {
    prev.classList.add('button-hidden');
  } else {
    prev.classList.remove('button-hidden');
  }
  if (slider.scrollLeft >= slider.scrollWidth - slider.offsetWidth) {
    next.classList.add('button-hidden');
  } else {
    next.classList.remove('button-hidden');
  }

}


const initArrowButtons = () => {
  const arrowButtons = document.querySelectorAll('.arrow');
  arrowButtons.forEach( button => {
    button.addEventListener('click', handleClick);

    // Hide next arrows if not enough paintings to require slide
    window.setTimeout( () => {
      const slider = button.parentElement.querySelector('.slider-cards');
      if ( slider.offsetWidth < slider.scrollWidth && button.classList.contains('next')) {
        button.classList.remove('button-hidden');
      }
    }, 200);

  });

  const sliders = document.querySelectorAll('.slider-cards');
  sliders.forEach(slider => {
    slider.addEventListener('scroll', handleScroll);
  });
}

export { initArrowButtons }
