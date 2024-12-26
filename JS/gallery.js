const images = [
    {
        preview: 'https://i.postimg.cc/HLbZL4mz/image1.jpg',
        original: 'https://i.postimg.cc/mDRd1z2s/image1.jpg',
        description: 'Image 1',
    },
    {
        preview: 'https://i.postimg.cc/Jz5cGpQC/image2.jpg',
        original: 'https://i.postimg.cc/w3KR3Jg5/image2.jpg',
        description: 'Image 2',
    },
    {
        preview: 'https://i.postimg.cc/bYSTY9Rt/image3.jpg',
        original: 'https://i.postimg.cc/vBVVy3d8/image3.jpg',
        description: 'Image 3',
    },
    {
        preview: 'https://i.postimg.cc/3xYCB5QX/image4.jpg',
        original: 'https://i.postimg.cc/hvR7tTSL/image4.jpg',
        description: 'Image 4',
    },
    {
        preview: 'https://i.postimg.cc/vmmrJrBD/image5.jpg',
        original: 'https://i.postimg.cc/Y2QWyn3b/image5.jpg',
        description: 'Image 5',
    },
    {
        preview: 'https://i.postimg.cc/mDzQDT7s/image6.jpg',
        original: 'https://i.postimg.cc/kX9brQY9/image6.jpg',
        description: 'Image 6',
    },
    {
        preview: 'https://i.postimg.cc/pVjfMX2Q/image7.jpg',
        original: 'https://i.postimg.cc/mgg1kbG5/image7.jpg',
        description: 'Image 7',
    },
    {
        preview: 'https://i.postimg.cc/nctvFbzy/image8.jpg',
        original: 'https://i.postimg.cc/htZz7HDP/image8.jpg',
        description: 'Image 8',
    },
    {
        preview: 'https://i.postimg.cc/Fsg01Wk7/image9.jpg',
        original: 'https://i.postimg.cc/ydcktxFk/image9.jpg',
        description: 'Image 9',
    },
];

const galleryContainer = document.querySelector('.gallery');

// Generate gallery markup
const galleryMarkup = images
    .map(({ preview, original, description }) => {
        return `
            <li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
            </li>
        `;
    })
    .join('');

galleryContainer.innerHTML = galleryMarkup;

// Add click event listener
galleryContainer.addEventListener('click', (event) => {
    event.preventDefault();

    const clickedImage = event.target;
    if (clickedImage.nodeName !== 'IMG') return;

    const imageSource = clickedImage.dataset.source;

    const instance = basicLightbox.create(`
        <img src="${imageSource}" width="800" height="600">
    `);

    instance.show();
});
