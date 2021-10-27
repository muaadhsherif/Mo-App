const fetchMovies = (props, subURL) => {
	fetch(`http://api.themoviedb.org/3/${subURL}?api_key=${process.env.REACT_APP_API_KEY}`)
		.then((data) => data.json())
		.then((json) => {
			let movies = json.results
			props.moviesToProps(movies)
		})
}

export default fetchMovies
