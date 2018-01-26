module.exports.extractMovies = contents =>
	contents
		.split("\n\n")
		.map(movie => movie.trim())
		.filter(movie => movie.length > 0)
		.map(movie => movie.split("\n"))
		.map(([title, releaseYear, format, actors]) => ({
			title: title.slice(7),
			releaseYear: releaseYear.slice(14),
			format: format.slice(8),
			actors: actors
				.slice(7)
				.split(", ")
				.map(actor => ({ name: actor }))
		}));

module.exports.matches = (str, query) => {
	if (query) {
		return str
			.trim()
			.toLowerCase()
			.includes(query.trim().toLowerCase());
	} else {
		return true;
	}
};
