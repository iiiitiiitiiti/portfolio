const button = document.querySelector('.m-back-to-top');
const footer = document.querySelector('.u-footer');

if (button && footer) {
  const updatePosition = () => {
    const visible = window.scrollY > 360;
    const footerTop = footer.getBoundingClientRect().top;
    const footerClearance = 24;
    const bottom = Math.max(24, window.innerHeight - footerTop + footerClearance);

    button.classList.toggle('m-back-to-top--visible', visible);
    button.style.setProperty('--back-to-top-bottom', `${bottom}px`);
  };

  button.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    });
  });

  window.addEventListener('scroll', updatePosition, { passive: true });
  window.addEventListener('resize', updatePosition);
  updatePosition();
}
