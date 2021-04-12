require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

// External imports
import "bootstrap";

// Internal imports, e.g:
import { initChangePage } from '../components/changepage';
import { initPaintingModals } from '../components/paintingmodal';
import { initPaintingSelect } from '../components/select';
import { initBanner } from '../components/banner';
import { initArrowButtons } from '../components/arrowbutton';
import { initUpdateTheme } from '../components/updatetheme';

document.addEventListener('turbolinks:load', () => {
  initChangePage();
  initPaintingModals();
  initPaintingSelect();
  initBanner();
  initArrowButtons();
  initUpdateTheme();

  const error = document.querySelector('.error');
  if (error) {
    window.addEventListener("load", () => {
      document.querySelector('#add-btn').click();
    });
  }
});
