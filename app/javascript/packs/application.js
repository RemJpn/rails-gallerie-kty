// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "bootstrap";

// Internal imports, e.g:
// import { initSelect2 } from '../components/init_select2';

document.addEventListener('turbolinks:load', () => {
  // Call your functions here, e.g:
  // initSelect2();
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
});
