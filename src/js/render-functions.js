import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function getGallery() {
  return document.querySelector('.gallery');
}

function getLoader() {
  return document.querySelector('.loader');
}

function getBtn() {
  return document.querySelector('.load-more');
}

export function createGallery(images) {
  const gallery = getGallery();

  const markup = images
    .map(
      image => `
<li class="gallery-item">
  <a href="${image.largeImageURL}">
    <img src="${image.webformatURL}" alt="${image.tags}" />
  </a>
</li>
`
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();
}

export function clearGallery() {
  getGallery().innerHTML = '';
}

export function showLoader() {
  getLoader()?.classList.add('is-visible');
}

export function hideLoader() {
  getLoader()?.classList.remove('is-visible');
}

export function showLoadMoreButton() {
  getBtn()?.classList.add('is-visible');
}

export function hideLoadMoreButton() {
  getBtn()?.classList.remove('is-visible');
}