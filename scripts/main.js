import { logEvent } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
import { analytics } from "./modal.js";

window.addEventListener('load', () => {

    const openModal = () => {
      const modal = document.querySelector('.modal');
      modal.classList.remove('modal--inactive');
    }

    const registerLead = () => {
      logEvent(analytics, 'generate_lead');
    }

    const openModalBtns = document.querySelectorAll('.modalBtn');
    const closeModalBtn = document.querySelector('.modal div img');

    openModalBtns.forEach(btn => {
      btn.addEventListener('click', openModal);
      btn.addEventListener('click', registerLead);
    });

    closeModalBtn.addEventListener('click', (e) => e.target.closest('.modal').classList.add('modal--inactive'));
});