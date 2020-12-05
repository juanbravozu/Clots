window.addEventListener('load', () => {

    const openModal = () => {
      const modal = document.querySelector('.modal');
      modal.classList.remove('modal--inactive');
    }

    const openModalBtns = document.querySelectorAll('.modalBtn');

    openModalBtns.forEach(btn => btn.addEventListener('click', openModal));
});