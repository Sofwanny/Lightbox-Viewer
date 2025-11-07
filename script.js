const galleryItem = document.querySelectorAll(".gallery-item");

const lightboxImage = document.querySelector("#lightbox-image");

const closeBtn = document.getElementById("close-btn");

const lightbox = document.querySelector(".lightbox");

galleryItem.forEach(item => {
item.addEventListener("click", () => {
  lightbox.style.display = "flex";
  lightboxImage.src = item.src.replace("-thumbnail", "");
});
});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
})

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});
