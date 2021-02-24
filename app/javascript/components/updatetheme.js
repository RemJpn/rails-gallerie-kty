const updateTheme = (e) => {
  console.log(e.currentTarget);
  const themeBar = e.currentTarget.parentElement.parentElement;

  const title = themeBar.querySelector('.title');
  const updateTheme = themeBar.querySelector('.update-theme');

  title.classList.add('d-none');
  updateTheme.classList.remove('d-none');

}

const initUpdateTheme = () => {
  if (document.querySelector('.add-themes')) { //if we are on the admin page

  }
  const pencilIcons = document.querySelectorAll('.fa-pencil-alt');
  const titles = document.querySelectorAll('.title');


  pencilIcons.forEach((pencilIcon) => {
    pencilIcon.addEventListener('click', updateTheme);
  });
  titles.forEach((title) => {
    title.addEventListener('click', updateTheme);
  });
}

export { initUpdateTheme }
