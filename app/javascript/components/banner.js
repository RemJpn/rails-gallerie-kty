const showBanner = () => {
  const paintingThumbnails = document.querySelectorAll('.painting-thumbnail');
  paintingThumbnails.forEach( thumbnail => {
    const factor = Math.random();
    thumbnail.style.zIndex = `${Math.floor(factor * 100)}`;
    console.log(factor);
    window.setTimeout( () => {
      thumbnail.classList.add('show');
      thumbnail.style.transform = `rotate(${factor*60 -30}deg) scale(0.95)`;

      }, factor * 1000)
  });

}


const initBanner = () => {
  document.onload = showBanner();
}

export {initBanner}
