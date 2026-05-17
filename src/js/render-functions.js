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
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
<li class="gallery-item">
  <a href="${largeImageURL}">
    <img
      src="${webformatURL}"
      alt="${tags}"
      class="gallery-image"
    />
  </a>

  <div class="info">
    <p><b>Likes:</b> ${likes}</p>
    <p><b>Views:</b> ${views}</p>
    <p><b>Comments:</b> ${comments}</p>
    <p><b>Downloads:</b> ${downloads}</p>
  </div>
</li>
`
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();
}

export function clearGallery() {
  const gallery = getGallery();
  gallery.innerHTML = '';
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