(() => {
  const viber = document.querySelector('[data-viber]');
  const note = document.getElementById('viberNote');

  if (!viber || !note) return;

  viber.addEventListener('click', (event) => {
    const mobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!mobile) {
      event.preventDefault();
      note.classList.add('show');
      note.scrollIntoView({behavior:'smooth',block:'nearest'});
    }
  });
})();
