import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { render } from './js/render-functions';
import { fetchPhotos } from './js/pixabay-api';

const formSearch = document.querySelector('.form-search');
const btnSearch = document.querySelector('.btn-search');

formSearch.addEventListener('submit', event => {});
