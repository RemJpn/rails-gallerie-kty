const showBanner = () => {
  const paintingThumbnails = document.querySelectorAll('.painting-thumbnail');
  const banner = document.querySelector('.banner');
  // const temp = banner.getBoundingClientRect();
  // const bannerCoords = banner.getBoundingClientRect();
  // const bannerWidth = bannerCoords.width;
  const bannerHeight = 400;
  const windowWidth = window.innerWidth;
    // console.log(temp);
    console.log(bannerHeight);
    console.log(windowWidth);


  paintingThumbnails.forEach( thumbnail => {
    const factor1 = Math.random();
    thumbnail.style.top = `${Math.random() * 0.7 * bannerHeight}px`;
    thumbnail.style.left = `${Math.random() * 0.6 * windowWidth + 0.1 * windowWidth}px`;
    thumbnail.style.zIndex = `${Math.floor(factor1 * 100)}`;
    thumbnail.style.transform = `rotate(${factor1*60 -30}deg)`;

    window.setTimeout( () => {
      thumbnail.classList.add('show');
      thumbnail.style.transform = `rotate(${factor1*60 -30}deg) scale(0.95)`;
      }, factor1 * 1000)
  });

  const title = document.querySelector('.main-title');
  window.setTimeout( () => {
    title.style.transition = "opacity 0.5s ease-out";
    title.style.opacity = 1;
  }, 1000);

}


const initBanner = () => {
  document.onload = showBanner();
}

export {initBanner}
