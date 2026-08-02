(() => {
  const items = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold:.08});
  items.forEach(item => observer.observe(item));

  document.querySelectorAll('.button').forEach(button => {
    const press = () => button.classList.add('is-pressed');
    const release = () => button.classList.remove('is-pressed');
    button.addEventListener('pointerdown', press);
    button.addEventListener('pointerup', release);
    button.addEventListener('pointerleave', release);
  });

  const viber = document.querySelector('.viber-link');
  const note = document.getElementById('viberNote');
  if (viber && note) {
    viber.addEventListener('click', event => {
      if (!/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        event.preventDefault();
        note.classList.add('show');
        note.scrollIntoView({behavior:'smooth',block:'nearest'});
      }
    });
  }
})();
