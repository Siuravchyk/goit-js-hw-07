import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
let modal;
addImageToGallery();
onShowOriginalImage();

function onShowOriginalImage() {
  gallery.addEventListener("click", createModalWithImage);
}

function createImages(images) {
  return images
    .map(
      (image) =>
        `<li class="gallery__item">
            <a class="gallery__link" href="${image.original}">
                <img
                    class="gallery__image"
                    src="${image.preview}"
                    data-source="${image.original}"
                    alt="${image.description}"
                    loading ="lazy"
                />
            </a>
        </li>`
    )
    .join("");
}

function addImageToGallery() {
  gallery.innerHTML = createImages(galleryItems);
}

function createModalWithImage(e) {
  if (e.target.nodeName !== "IMG") {
    return;
  }
  e.preventDefault();

  modal = basicLightbox.create(
    `
		<img width="1400" height="900" src="${replaceUrl(e)}">
	`,
    { onClose: (modal) => document.body.classList.remove("scroll-hidden") }
  );
  modal.show();
  document.body.classList.add("scroll-hidden");
  onCloseModal();
}

function replaceUrl(img) {
  return img.target.dataset.source;
}

function onCloseModal() {
  window.addEventListener("keydown", checkPressEsc);
}

function checkPressEsc(e) {
  console.log(e.code);
  if (e.code === "Escape") {
    modal.close();
    window.removeEventListener("keydown", checkPressEsc);
  }
}