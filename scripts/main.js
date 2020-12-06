window.addEventListener('load', () => {

    const openModal = () => {
      const modal = document.querySelector('.modal');
      modal.classList.remove('modal--inactive');
    }

    const openModalBtns = document.querySelectorAll('.modalBtn');
    const closeModalBtn = document.querySelector('.modal div img');

    openModalBtns.forEach(btn => btn.addEventListener('click', openModal));

    closeModalBtn.addEventListener('click', (e) => e.target.closest('.modal').classList.add('modal--inactive'));
});