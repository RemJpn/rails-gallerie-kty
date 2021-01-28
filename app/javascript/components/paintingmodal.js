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

  //Calculate transformation
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const scaleFactor = windowWidth * 0.8 / paintingCoord.width;
  const translateX = (windowWidth - paintingCoord.width) / 2 - paintingCoord.x;
  const translateY = (windowHeight - paintingCoord.height) / 2 - paintingCoord.y;

  //Apply transformation after adding the clone to the DOM
  setTimeout(() => {
    elementClone.style.transform = `translate(${translateX}px,${translateY}px) scale(${scaleFactor})`;
    elementClone.style.border = 'none';
    elementClone.style.padding = '0';
  });


  /*
  const slider = element.parentElement.parentElement;
  console.dir(slider);
  const sliderCoord = slider.getBoundingClientRect();
  console.log(sliderCoord);
  const paintingCoord = element.getBoundingClientRect();
  const scrollY = window.scrollY;
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const scaleFactor = windowWidth * 0.8 / paintingCoord.width;

  const translateX = (windowWidth - paintingCoord.width) / 2 - paintingCoord.x;
  const translateY = (windowHeight - paintingCoord.height) / 2 - paintingCoord.y;

  element.style.transform = `translate(${translateX}px,${translateY}px) scale(${scaleFactor})`;
  element.style.border = 'none';
  element.style.padding = '0';
  element.style.zIndex = 999;

  element.parentElement.parentElement.style.overflow = 'visible';

  element.classList.add('zoom');
  */
  const darkBg = document.createElement('div');
  darkBg.classList.add('empty-bg');
  document.body.appendChild(darkBg);
  setTimeout(() => darkBg.classList.add('dark-bg'), 0);
  ;

  elementClone.addEventListener('click', zoomOut, {once: true});

}

const zoomOut = () => {
  const zoomedPainting = document.querySelector('.zoom');
  zoomedPainting.style.transform = 'none';
  zoomedPainting.style.border = null;
  zoomedPainting.style.padding = null;
  zoomedPainting.addEventListener('transitionend', (e) => {
    console.log('overflow can be changed to scroll again');
    zoomedPainting.remove();
  }, {once: true});


  const darkBg = document.querySelector('.dark-bg');
  darkBg.addEventListener('transitionend', () => {
    console.log('transition ended')
    document.body.removeChild(darkBg);
  });
  darkBg.classList.remove('dark-bg');
}

// const zoomOut = (element) => {
//   element.style.transform = 'none';
//   element.style.border = null;
//   element.style.padding = null;
//   element.classList.remove('zoom');
//   element.addEventListener('transitionend', (e) => {
//     console.log('overflow can be changed to scroll again');
//     e.currentTarget.parentElement.parentElement.style.overflow = 'scroll'
//     e.currentTarget.style.zIndex = null;
//   }, {once: true});
//   ;

//   const darkBg = document.querySelector('.dark-bg');
//   darkBg.addEventListener('transitionend', () => {
//     console.log('transition ended')
//     document.body.removeChild(darkBg);
//   });
//   darkBg.classList.remove('dark-bg');
// }


const initPaintingModals = () => {
  const paintings = document.querySelectorAll('.card-painting img');

  paintings.forEach(painting => painting.addEventListener('click', toggleModal));

}

export { initPaintingModals }
