import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
addImageToGallery();
const lightbox = new SimpleLightbox(".gallery__link", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
  showCounter: false,
});
` `;
function createImages(images) {
  return images
    .map(
      (image) =>
        `<li class="gallery__item">
            <a class="gallery__link" href="${image.original}">
                <img
                    class="gallery__image"
                    src="${image.preview}"
                    alt="${image.description}"
                />
            </a>
        </li>`
    )
    .join("");
}

function addImageToGallery() {
  gallery.innerHTML = createImages(galleryItems);
}
