const movies = [
  {
    adult: false,
    genre: ["Animation", "Family", "Comedy", "Action"],
    id: 519182,
    poster_path: "https://image.tmdb.org/t/p/w500/wWba3TaojhK7NdycRhoQpsG0FaH.jpg",
    title: "Despicable Me 4",
    vote_average: 7.352,
  },
  {
    adult: false,
    genre: ["Drama", "Romance"],
    id: 1079091,
    poster_path: "https://image.tmdb.org/t/p/w500/tJSbiu7S5pqDnzH9weTW82bYbWu.jpg",
    title: "It Ends with Us",
    vote_average: 7.194,
  },
  {
    adult: true,
    genre: ["Action", "Thriller", "Drama", "Crime"],
    id: 1160018,
    poster_path: "https://image.tmdb.org/t/p/w500/m2zXTuNPkywdYLyWlVyJZW2QOJH.jpg",
    title: "Kill",
    vote_average: 7.315,
  },
  {
    adult: true,
    genre: ["Science Fiction", "Horror", "Thriller"],
    id: 945961,
    poster_path: "https://image.tmdb.org/t/p/w500/b33nnKl1GSFbao4l3fZDDqsMx0F.jpg",
    title: "Alien: Romulus",
    vote_average: 7.3,
  },
  {
    adult: true,
    genre: ["Horror", "Crime", "Mystery"],
    id: 1023922,
    poster_path: "https://image.tmdb.org/t/p/w500/ArvoFK6nlouZRxYmtIOUzKIrg90.jpg",
    title: "MaXXXine",
    vote_average: 6.308,
  },
  {
    adult: false,
    genre: ["Action", "Comedy", "Adventure"],
    id: 1051891,
    poster_path: "https://image.tmdb.org/t/p/w500/rUcuageYgv9SsJoWuc0seRWG6JC.jpg",
    title: "Thelma",
    vote_average: 7,
  },
  {
    adult: false,
    genre: ["Animation", "Action", "Drama"],
    id: 1104844,
    poster_path: "https://image.tmdb.org/t/p/w500/ae434jM5NG2kKX1rRkG5giMhpPI.jpg",
    title: "BLUE LOCK THE MOVIE -EPISODE NAGI-",
    vote_average: 8.3,
  },
  {
    adult: true,
    genre: ["Horror", "Thriller"],
    id: 646683,
    poster_path: "https://image.tmdb.org/t/p/w500/ar2h87jlTfMlrDZefR3VFz1SfgH.jpg",
    title: "The Exorcism",
    vote_average: 4.57,
  },
  {
    adult: true,
    genre: ["Horror", "Thriller"],
    id: 1010605,
    poster_path: "https://image.tmdb.org/t/p/w500/mzj2j2syZFAhCwbwT9a2vK8lzmN.jpg",
    title: "The Devil's Spawn",
    vote_average: 5.9,
  },
  {
    adult: true,
    genre: ["Action", "Thriller"],
    id: 975542,
    poster_path: "https://image.tmdb.org/t/p/w500/gPUihZBrsyhnoy8jc73OaFXN5qY.jpg",
    title: "Infiltrator",
    vote_average: 6.4,
  },
];

const container = document.querySelector('.container');
const favorites = document.querySelector('.favorites');

const displayMovies = function() {
  container.innerHTML = ''; 
  movies.forEach((item, index) => {
    let movie = 
    `<div class='task'>
      <div>
        <h1>${item.title}</h1>
        <img src="${item.poster_path}" alt="${item.title} poster" />
        <p>Genres: ${item.genre.join(", ")}</p>
        <p>Rating: ${item.vote_average}</p>
        <p>${item.adult ? "16+" : "0+"}</p>
        <button class="add" data-index="${index}">Add to favorites <i class="fa-solid fa-pen"></i></button>
      </div>
    </div>`;
    container.insertAdjacentHTML('beforeend', movie);
  });

  
  const addBtn = document.querySelectorAll('.add');

  addBtn.forEach(button => {
    button.addEventListener('click', function() {
      
      const movieIndex = this.getAttribute('data-index');
      addToFavorites(movieIndex);
    });
  });
}

const addToFavorites = function(index) {
  const movie = movies[index];
  let favoriteMovie = `
  <div class='movies'>
    <h1>${movie.title}</h1>
    <button class="delete">Delete</button>
  </div>`;
  
  favorites.insertAdjacentHTML("beforeend", favoriteMovie);

  const deleteBtn = favorites.querySelector('.movies:last-child .delete');
  deleteBtn.addEventListener('click', function() {
    this.parentElement.remove();
  });
}

displayMovies();
