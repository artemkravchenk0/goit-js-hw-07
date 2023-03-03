import { galleryItems } from './gallery-items.js';
// Change code below this line

const htmlMarkupArray = galleryItems.map(({preview, original, description}) => `
    <div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>
    `
)

const galleryEl = document.querySelector('.gallery')
galleryEl.innerHTML = htmlMarkupArray.join('')

let instance;

galleryEl.addEventListener('click', (event) => {
    event.preventDefault()
    const originalImage = event.target.dataset.source

    if(!originalImage) {
        return
    }

    const altText = event.target.alt
    instance = basicLightbox.create(`<img src="${originalImage}" alt="${altText}">`)
    instance.show()
})


document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') {
        return
    }

    if(instance && instance.visible()) {
        instance.close()
    }
})