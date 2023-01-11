class Movie {
  // a & b. creating constructor with title, studio, rating and seting defult value of rating to 'PG'
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  getPG(arrMovies) {
    arrMovies.filter((e) => {
      return e.rating === "PG13";
    });
  }
}

// d. creating Movie instances
const movie1 = new Movie("Casino Royale", "Eon production", "PG13");
console.log(movie1);
const movie2 = new Movie("Spider-Man: No Way Home", "Eon Productions", "5.0");
console.log(movie2);
const movie3 = new Movie("Raya And The Last Dragon", "Eon Productions");
console.log(movie3);
const movie4 = new Movie("Doctor Strange", "Marvels Production", "PG13");
console.log(movie4);

//creating array of movies with Movie type
const arrMovies = [movie1, movie2, movie3, movie4];

//c. calling getPG method to return a new array of only those movies in the input array with a rating of "PG"
const pgRated = movie1.getPG(arrMovies);
console.log(pgRated);
