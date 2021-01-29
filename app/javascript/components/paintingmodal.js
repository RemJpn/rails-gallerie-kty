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
  details.style.display = 'block'

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
  zoomDiv.addEventListener('click', zoomOut, {once: true});

  //Calculate transformation
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const scaleX = windowWidth * 0.5 / paintingCoord.width;
  const scaleY = windowHeight * 0.8 / paintingCoord.height;
  const scaleFactor = Math.min(scaleX, scaleY);
  const translateX = (0.7 * windowWidth - paintingCoord.width * scaleFactor) / 2 - paintingCoord.x;
  const translateY = (windowHeight - paintingCoord.height * scaleFactor) / 2 - paintingCoord.y;

  //Apply transformation after adding the clone to the DOM
  setTimeout(() => {
    console.log(`translate(${translateX}px,${translateY}px)`);
    zoomDiv.style.transform = `translate(${translateX}px,${translateY}px)`;
    // elementClone.style.transform = `scale(${scaleFactor})`;
    console.log(`${scaleFactor * paintingCoord.height}px`);
    elementClone.style.height = `${scaleFactor * paintingCoord.height}px`;
    elementClone.style.border = 'none';
    elementClone.style.padding = '0';
  });

  //Adding dark background
  const darkBg = document.createElement('div');
  darkBg.classList.add('empty-bg');
  document.body.appendChild(darkBg);
  darkBg.addEventListener('transitionend', () => {
    details.querySelector('.title').classList.add('active-title');
  }, {once: true});
  setTimeout(() => {
    darkBg.classList.add('dark-bg')
    details.style.opacity = 1;

  }, 0);
  darkBg.addEventListener('click', zoomOut, {once: true});

}

const zoomOut = () => {
  const zoomDiv = document.querySelector('.zoom');
  zoomDiv.style.transform = null;

  const paintingClone = zoomDiv.querySelector('.framed-painting');
  // paintingClone.style.transform = null;
  paintingClone.style.height = null;
  paintingClone.style.border = null;
  paintingClone.style.padding = null;

  const details = zoomDiv.querySelector('.details');
  details.style.transitionDelay = 'unset';
  details.style.opacity = null;
  details.querySelector('.title').classList.remove('active-title');

  paintingClone.addEventListener('transitionend', (e) => {
    console.log('painting de-zoomed');
    paintingClone.remove();
    zoomDiv.style = null;
    details.style = null;
    //details.style.display = null;
    zoomDiv.classList.remove('zoom');
  }, {once: true});


  const darkBg = document.querySelector('.dark-bg');
  darkBg.addEventListener('transitionend', () => {
    darkBg.remove();
  });
  darkBg.classList.remove('dark-bg');
}


const initPaintingModals = () => {
  const paintings = document.querySelectorAll('.card-painting img');

  paintings.forEach(painting => painting.addEventListener('click', toggleModal));

}

export { initPaintingModals }
