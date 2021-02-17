
const select = (e) => {
  const modifyBtn = document.querySelector('#modify-btn');
  const deleteBtn = document.querySelector('#delete-btn');

  if (e.currentTarget.classList.contains('selected')){
    e.currentTarget.classList.remove('selected');
    modifyBtn.classList.add('btn-disabled');
    deleteBtn.classList.add('btn-disabled');
  } else {
    const paintings = document.querySelectorAll('.square-painting');
    paintings.forEach((painting) => painting.classList.remove('selected'));
    e.currentTarget.classList.add('selected');

    modifyBtn.href = `#paintingModal-${e.currentTarget.dataset.index}`;
    modifyBtn.classList.remove('btn-disabled');
    deleteBtn.href = `paintings/${e.currentTarget.dataset.index}`;
    deleteBtn.classList.remove('btn-disabled');
  }

}

const initPaintingSelect = () => {
  const paintings = document.querySelectorAll('.square-painting');

  paintings.forEach((painting) => {
    painting.addEventListener('click', select);
  });
  paintings.forEach((painting) => {
    painting.addEventListener('dblclick', () => document.querySelector('#modify-btn').click());
  });
}

export { initPaintingSelect }
