var Movie = function (options) {
  if (options) {
    this.title = options.title,
    this.description = options.description,
    this.publishedDate = options.publishedDate,
    this.availableDate = options.availableDate,
    this.headerImage = options.images[0].url,
    this.videoURL = options.contents[0].url,
    this.id = options.id
  } else {
    this.title = ""
    this.description = ""
    this.publishedDate = ""
    this.availableDate = ""
    this.headerImage = ""
    this.videoURL = "",
    this.id = ""
  }
}

export default Movie;
