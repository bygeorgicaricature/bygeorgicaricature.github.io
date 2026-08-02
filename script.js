(() => {
  const setVisibleHeight = () => {
    const viewportHeight = window.visualViewport
      ? window.visualViewport.height
      : window.innerHeight;

    document.documentElement.style.setProperty(
      '--visible-height',
      `${Math.floor(viewportHeight)}px`
    );
  };

  setVisibleHeight();
  window.addEventListener('resize', setVisibleHeight);
  window.addEventListener('orientationchange', () => setTimeout(setVisibleHeight, 150));

  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', setVisibleHeight);
  }

  const viber = document.querySelector('[data-viber]');
  const note = document.getElementById('viberNote');

  if (!viber || !note) return;

  viber.addEventListener('click', (event) => {
    const mobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!mobile) {
      event.preventDefault();
      note.classList.add('show');
    }
  });
})();
