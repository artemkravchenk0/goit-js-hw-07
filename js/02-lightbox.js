import { galleryItems } from './gallery-items.js';
// Change code below this line

const htmlMarkupArray = galleryItems.map(({preview, original, description}) => `
    <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
`
)

const galleryEl = document.querySelector('.gallery')
galleryEl.innerHTML = htmlMarkupArray.join('')

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
});

console.log(galleryItems);
