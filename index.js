

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
