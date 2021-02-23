const toggleModal = (e) => {
  if (e.currentTarget.classList.contains('zoom')){
    zoomOut(e.currentTarget);
  } else {
    zoomIn(e.currentTarget);
  }
}


const zoomIn = (element) => {
  console.log('zoom In');

  //Select zoom div
  const zoomDiv = document.querySelector(`#zoom-${element.dataset.index}`);
  zoomDiv.style.position = 'absolute';
  zoomDiv.style.zIndex = 1000;
  const details = zoomDiv.querySelector('.details');
  // details.style.display = 'block'

  //Create a clone of the painting
  const elementClone = element.cloneNode();
  const paintingCoord = element.getBoundingClientRect();
  zoomDiv.classList.add('zoom');
  // elementClone.style.position = 'absolute';
  zoomDiv.style.top = `${paintingCoord.y + window.scrollY}px`;
  zoomDiv.style.left = `${paintingCoord.x}px`;
  // elementClone.style.zIndex = 999;
  // zoomDiv.appendChild(elementClone);
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


  // Adapt layout for mobiles
  if ( window.innerWidth < 770 ) {
    windowWidth = window.outerWidth;
    windowHeight = window.outerHeight;
    zoomDiv.style.flexDirection = 'column';

    scaleX = windowWidth * 0.8 / paintingCoord.width;
    console.log(`scaleX = ${scaleX}`);
    scaleY = windowHeight * 0.5 / paintingCoord.height;
    scaleFactor = Math.min(scaleX, scaleY);

    translateX = (windowWidth - paintingCoord.width * scaleFactor) / 2 - paintingCoord.x;
    translateY = (0.7 * windowHeight - paintingCoord.height * scaleFactor) / 2 - paintingCoord.y;
    zoomDiv.querySelector('.details').style.width = `${scaleFactor * paintingCoord.width}px`;

  } else {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    scaleX = windowWidth * 0.5 / paintingCoord.width;
    scaleY = windowHeight * 0.8 / paintingCoord.height;
    scaleFactor = Math.min(scaleX, scaleY);
    translateX = (0.7 * windowWidth - paintingCoord.width * scaleFactor) / 2 - paintingCoord.x;
    translateY = (windowHeight - paintingCoord.height * scaleFactor) / 2 - paintingCoord.y;

  }
    console.log(`painting width = ${paintingCoord.width}`);
    console.log(`window width = ${windowWidth}`);
    console.log(`window height = ${windowHeight}`);
  console.log(scaleFactor);
  console.log(translateX);
  console.log(translateY);


  //Apply transformation after adding the clone to the DOM
  setTimeout(() => {
    zoomDiv.style.transform = `translate(${translateX}px,${translateY}px)`;
    // elementClone.style.transform = `scale(${scaleFactor})`;
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
    details.querySelector('.title').classList.add('active-title');
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

  // if (zoomDiv && darkBg) {
    console.log('zoom Out');
    console.log(event)
    console.log(zoomDiv);
    console.log(darkBg);
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

    //removal of dark background
    // darkBg.addEventListener('transitionend', () => {
    //   darkBg.remove();
    // });
    darkBg.classList.remove('dark-bg');
  // }

    //Removal of event listeners
    zoomDiv.removeEventListener('click', zoomOut);
    darkBg.removeEventListener('click', zoomOut);
    window.removeEventListener('scroll', zoomOut);
}


const initPaintingModals = () => {
  const paintings = document.querySelectorAll('.card-painting img');

  paintings.forEach(painting => painting.addEventListener('click', toggleModal));

}

export { initPaintingModals }
