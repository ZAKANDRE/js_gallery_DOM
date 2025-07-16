const gallery = document.querySelector('.gallery');
const largeImg = document.querySelector('#largeImg');

largeImg.setAttribute('src', '/images/landscape-first.png');

gallery.addEventListener('click', function (e) {
  const link = e.target.closest('.list-item__link');

  if (link) {
    e.preventDefault();

    const linkHref = link.getAttribute('href');

    if (!linkHref.startsWith('http')) {
      const baseUrl = window.location.origin;

      largeImg.setAttribute('src', `${baseUrl}${linkHref}`);
    } else {
      largeImg.setAttribute('src', linkHref);
    }
  }
});
