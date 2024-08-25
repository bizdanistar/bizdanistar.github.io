const apiKey = '94710dbf3e97846c6b959f9714538145'
const urlNew = `https://api.themoviedb.org/3/discover/movie?api_key=`

const joined = urlNew + apiKey
console.log(joined);


// async function getMovies(){
//   try {
//     const request = await axios(urlNew + api)
//     const {
//       data: {results}
//     } = response
//     console.log(results);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getMovies()


// movie list functionality
// search functionality
// filtering by genres (optional)
// go to the specific movie page
// show movie information (cast, title etc.)
// show the trailer (optional)
const container = document.querySelector('.container')

async function getMovie(){
  try {
    const {
      data: { results },
    } = await axios(urlNew + apiKey)
    results.forEach(movie => {
      const displayMovies = `
      <h1> ${movie.title}</h1>
      

`
container.insertAdjacentHTML('beforeend', displayMovies)
    });

    console.log(results);
  } catch (error) {
    console.log(error);
  }
}
getMovie()
