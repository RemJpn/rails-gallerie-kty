const initChangePage = () => {

  const sectionTitles = document.querySelectorAll('.section-title');
  const profile = document.querySelector('.profile');
  const paintings = document.querySelector('.paintings');

  const toggleActive = e => {
    sectionTitles.forEach(title => title.classList.remove('active-title'));
    e.currentTarget.classList.add('active-title');
    if (e.currentTarget.dataset.menu == 'profile') {
      document.body.classList.add('profile-bg');
      profile.classList.remove('d-none');
      paintings.classList.add('d-none');
    } else {
      document.body.classList.remove('profile-bg');
      profile.classList.add('d-none');
      paintings.classList.remove('d-none');
    }
  }

  sectionTitles.forEach((title) => {
    title.addEventListener('click', toggleActive);
  });

}

export { initChangePage }
