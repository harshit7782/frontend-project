// Gallery Image Slider
// let currentImageIndex = 0;
// const totalImages = document.querySelectorAll(".image-gallery img").length;
// const nextButton = document.getElementById("nextButton");
// const prevButton = document.getElementById("prevButton");

// nextButton.addEventListener("click", showNextImage);
// prevButton.addEventListener("click", showPrevImage);

// function showNextImage() {
//   currentImageIndex = (currentImageIndex + 1) % totalImages;
//   updateGallery();
// }

// function showPrevImage() {
//   currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
//   updateGallery();
// }

// function updateGallery() {
//   const images = document.querySelectorAll(".image-gallery img");
//   images.forEach((image, index) => {
//     if (index === currentImageIndex) {
//       image.style.opacity = 1;
//     } else {
//       image.style.opacity = 0;
//     }
//   });
// }

console.log("first");

// Fetch product data from JSONPlaceholder
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((productData) => {
    // Display product information dynamically
    const productDetailsContainer = document.getElementById("product-details");
    let updateHtml = "";

    productData.forEach((element) => {
      updateHtml += `
       <div class="col-md-4 d-flex flex-row justify-content-center py-5">
        <div>
            <div class="card">
                <div class="card-img"><img class="image-inside" src="https://source.unsplash.com/random/150x150" alt="" /></div>
                <div class="card-title text-center">${element.title.slice(
                  0,
                  12
                )}</div>
                <div class="card-subtitle text-center">${element.body.slice(
                  0,
                  50
                )}</div>
            </div>
        </div>
       </div>
        `;
    });

    productDetailsContainer.innerHTML = updateHtml;
  })
  .catch((error) => console.error("Error fetching product data:", error));
