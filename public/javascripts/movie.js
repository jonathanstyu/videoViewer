var Movie = function (options) {
  if (options) {
    this.title = options.title || "",
    this.description = options.description || "",
    this.publishedDate = options.publishedDate || "",
    this.availableDate = options.availableDate || "",
    this.headerImage = options.images ? options.images[0].url : "",
    this.videoURL = options.contents ? options.contents[0].url : "",
    this.id = options.id,
    this.credits = options.credits,
    this.categories = options.categories
  } else {
    this.title = ""
    this.description = ""
    this.publishedDate = ""
    this.availableDate = ""
    this.headerImage = ""
    this.videoURL = "",
    this.id = "",
    this.credits = [],
    this.categories = []
  }
}

Movie.serializeFromMovieTemplate = function (movie) {
  var serializedMovie = new Movie(movie);
  serializedMovie.headerImage = movie.headerImage;
  serializedMovie.videoURL = movie.videoURL;
  return serializedMovie;
}

export default Movie;
