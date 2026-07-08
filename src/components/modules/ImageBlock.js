// クリックで dialog を開閉する。dialog 自体のクリック（= 背景クリック）でも閉じる
document.querySelectorAll('.m-image').forEach((figure) => {
  const zoom = figure.querySelector('.m-image__zoom');
  const dialog = figure.querySelector('.m-image__dialog');
  const close = figure.querySelector('.m-image__close');
  if (!zoom || !dialog || !close) return;

  zoom.addEventListener('click', () => dialog.showModal());
  close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
});
