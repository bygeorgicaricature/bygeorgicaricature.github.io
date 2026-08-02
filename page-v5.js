(() => {
  const viber = document.querySelector('[data-viber]');
  const message = document.getElementById('viberMessage');
  if (!viber || !message) return;

  viber.addEventListener('click', (event) => {
    const mobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (!mobile) {
      event.preventDefault();
      message.classList.add('show');
      message.scrollIntoView({behavior:'smooth',block:'nearest'});
    }
  });
})();
