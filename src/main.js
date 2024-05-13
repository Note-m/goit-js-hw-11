import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { render } from './js/render-functions';
import { fetchPhotos } from './js/pixabay-api';
import simpleLightbox from 'simplelightbox';

const formSearch = document.querySelector('.form-search');
const imgGallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

function search(event) {
  //Скасовую дефолтні дії
  event.preventDefault();
  // read searchWords
  const searchQuery = event.target.elements.searchWords.value.trim();

  //cheak searchQuery and use izitost for message about error
  if (searchQuery === '') {
    return iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
  }
  //clean gallery
  imgGallery.innerHTML = '';

  loader.classList.remove('display-none');
  //use fechphotos for rendering page
  fetchPhotos(searchQuery)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
      imgGallery.innerHTML = render(data.hits);
      const buider = new simpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionsDelay: 250,
      });
      builder.refresh();
    })
    .catch(error => console.log(error))
    .finally(() => {
      loader.classList.add('display-none');
      formSearch.reset;
    });
}

formSearch.addEventListener('submit', search);
