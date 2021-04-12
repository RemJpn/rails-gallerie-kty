const toggleModal = (e) => {
  if (e.currentTarget.classList.contains('zoom')){
    zoomOut(e.currentTarget);
  } else {
    zoomIn(e.currentTarget);
  }
}


const zoomIn = (element) => {
  //Select zoom div
  const zoomDiv = document.querySelector(`#zoom-${element.dataset.index}`);
  zoomDiv.style.position = 'absolute';
  zoomDiv.style.zIndex = 1000;
  const details = zoomDiv.querySelector('.details');

  //Create a clone of the painting
  const elementClone = element.cloneNode();
  const paintingCoord = element.getBoundingClientRect();
  zoomDiv.classList.add('zoom');
  zoomDiv.style.top = `${paintingCoord.y + window.scrollY}px`;
  zoomDiv.style.left = `${paintingCoord.x}px`;
  zoomDiv.insertAdjacentElement('afterbegin',elementClone);
  zoomDiv.addEventListener('click', zoomOut);

  //Calculate transformation
  let windowWidth;
  let windowHeight;
  let scaleX;
  let scaleY;
  let scaleFactor;
  let translateX;
  let translateY;

  if ( window.innerWidth < 770 ) {
    // Adapt layout for mobiles
    windowWidth = window.outerWidth;
    windowHeight = window.outerHeight;
    zoomDiv.style.flexDirection = 'column';

    scaleX = windowWidth * 0.8 / paintingCoord.width;
    scaleY = windowHeight * 0.5 / paintingCoord.height;
    scaleFactor = Math.min(scaleX, scaleY);

    translateX = (windowWidth - paintingCoord.width * scaleFactor) / 2 - paintingCoord.x;
    translateY = (0.7 * windowHeight - paintingCoord.height * scaleFactor) / 2 - paintingCoord.y;
    zoomDiv.querySelector('.details').style.width = `${scaleFactor * paintingCoord.width}px`;

  } else {
    // Adapt layout for bigger screens
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    scaleX = windowWidth * 0.5 / paintingCoord.width;
    scaleY = windowHeight * 0.8 / paintingCoord.height;
    scaleFactor = Math.min(scaleX, scaleY);
    translateX = (0.7 * windowWidth - paintingCoord.width * scaleFactor) / 2 - paintingCoord.x;
    translateY = (windowHeight - paintingCoord.height * scaleFactor) / 2 - paintingCoord.y;

  }

  //Apply transformation after adding the clone to the DOM
  setTimeout(() => {
    zoomDiv.style.transform = `translate(${translateX}px,${translateY}px)`;
    elementClone.style.height = `${scaleFactor * paintingCoord.height}px`;
    elementClone.style.border = 'none';
    elementClone.style.padding = '0';
    elementClone.addEventListener('transitionend', () => details.style.display = 'block' );
  });

  //Adding dark background
  const darkBg = document.createElement('div');
  darkBg.classList.add('empty-bg');
  document.body.appendChild(darkBg);
  darkBg.addEventListener('transitionend', () => {
      setTimeout(() => details.querySelector('.title').classList.add('active-title'));
      window.addEventListener('scroll', zoomOut);
    }, {once: true});
  setTimeout(() => {
    darkBg.classList.add('dark-bg')
    details.style.opacity = 1;
  }, 0);

  darkBg.addEventListener('click', zoomOut);
}

const zoomOut = (event) => {
  const zoomDiv = document.querySelector('.zoom');
  const darkBg = document.querySelector('.empty-bg');

  zoomDiv.style.transform = null;

  const paintingClone = zoomDiv.querySelector('.framed-painting');
  paintingClone.style.height = null;
  paintingClone.style.border = null;
  paintingClone.style.padding = null;

  const details = zoomDiv.querySelector('.details');
  details.style.transitionDelay = 'unset';
  details.style.opacity = null;
  details.querySelector('.title').classList.remove('active-title');
  details.style.width = null;

  paintingClone.addEventListener('transitionend', (e) => {
    paintingClone.remove();
    zoomDiv.style = null;
    details.style = null;
    zoomDiv.classList.remove('zoom');
    darkBg.remove();
  });

  darkBg.classList.remove('dark-bg');

  zoomDiv.removeEventListener('click', zoomOut);
  darkBg.removeEventListener('click', zoomOut);
  window.removeEventListener('scroll', zoomOut);
}


const initPaintingModals = () => {
  const paintings = document.querySelectorAll('.framed-painting');
  paintings.forEach(painting => painting.addEventListener('click', toggleModal));
}

export { initPaintingModals }
