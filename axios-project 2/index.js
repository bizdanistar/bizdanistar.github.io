const url = "https://solar-poised-salad.glitch.me/products";

// GET REQUESTS
async function getProducts() {
  try {
    const response = await axios(url);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}

// async function getTodosWithFetch() {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getTodosWithFetch();

// POST REQUESTS

async function addProduct() {
  try {
    const product = {
      imageUrl:
        "https://m.media-amazon.com/images/I/61sWCPz-IfL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      title: "Nokia added with axios",
      price: 899,
      description: "Nokia phone",
    };
    const response = await axios.post(url, product);
    console.log(response.data);
    getProducts();
  } catch (error) {
    console.log(error);
  }
}

async function addProductWithFetch() {
  try {
    const product = {
      imageUrl:
        "https://m.media-amazon.com/images/I/61sWCPz-IfL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      title: "Nokia added with Fetch",
      price: 899,
      description: "Nokia phone",
    };
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    const data = await response.json();
    console.log(data);
    getProducts();
    // write your success logic
    // update the list of products
  } catch (error) {
    console.log(error);
  }
}

// document.querySelector("#axios-btn").addEventListener("click", () => {
//   location.href = `movie.html?movieId=${12}`;

//   //   addProduct();
// });

// document.querySelector("#fetch-btn").addEventListener("click", () => {
//   addProductWithFetch();
// });

// movie list functionality
// search functionality
// filtering by genres (optional)
// go to the specific movie page
// show movie information (cast, title etc.)
// show the trailer (optional)

const apiKey = "95686a04581c305cc6d7e4ccff9d039a";
const newUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=`;

async function getMovies() {
  try {
    const {
      data: { results },
    } = await axios(newUrl + apiKey);
    console.log(results);
    const moviesContainer = document.querySelector(".movies");
    results.forEach((movie) => {
      const button = `<button id="${movie.id}">${movie.title}</button>`;
      moviesContainer.insertAdjacentHTML("beforeend", button);
    });

    const btns = document.querySelectorAll("button");
    btns.forEach((btn) => {
      btn.addEventListener("click", function () {
        // console.log(this.id);
        location.href = `movie.html?movieId=${this.id}`;
      });
    });
  } catch (error) {
    console.log(error);
  }
}

getMovies();
