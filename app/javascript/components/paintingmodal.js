const toggleModal = (e) => {
  if (e.currentTarget.classList.contains('zoom')){
    zoomOut(e.currentTarget);
  } else {
    zoomIn(e.currentTarget);
  }
}


const zoomIn = (element) => {
  //Create a clone of the painting
  const elementClone = element.cloneNode();
  const paintingCoord = element.getBoundingClientRect();
  elementClone.classList.add('zoom');
  elementClone.style.position = 'absolute';
  elementClone.style.top = `${paintingCoord.y + window.scrollY}px`;
  elementClone.style.left = `${paintingCoord.x}px`;
  elementClone.style.zIndex = 999;
  document.body.appendChild(elementClone);
  elementClone.addEventListener('click', zoomOut, {once: true});

  //Calculate transformation
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const scaleX = windowWidth * 0.8 / paintingCoord.width;
  const scaleY = windowHeight * 0.8 / paintingCoord.height;
  const scaleFactor = Math.min(scaleX, scaleY);
  const translateX = (windowWidth - paintingCoord.width) / 2 - paintingCoord.x;
  const translateY = (windowHeight - paintingCoord.height) / 2 - paintingCoord.y;

  //Apply transformation after adding the clone to the DOM
  setTimeout(() => {
    elementClone.style.transform = `translate(${translateX}px,${translateY}px) scale(${scaleFactor})`;
    elementClone.style.border = 'none';
    elementClone.style.padding = '0';
  });

  //Adding dark background
  const darkBg = document.createElement('div');
  darkBg.classList.add('empty-bg');
  document.body.appendChild(darkBg);
  setTimeout(() => darkBg.classList.add('dark-bg'), 0);
  darkBg.addEventListener('click', zoomOut, {once: true});

  //display associated details
  const details = document.querySelector(`#details-${element.dataset.index}`);
  console.log(details.innerText);
  details.style.position = 'absolute';
  details.style.zIndex = 1000;
  details.style.top = '50%';
  details.style.left = '50%';
  details.classList.remove('d-none');
}

const zoomOut = () => {
  const zoomedPainting = document.querySelector('.zoom');
  zoomedPainting.style.transform = 'none';
  zoomedPainting.style.border = null;
  zoomedPainting.style.padding = null;
  zoomedPainting.addEventListener('transitionend', (e) => {
    zoomedPainting.remove();
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
