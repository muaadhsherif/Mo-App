import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

function DetailsLink(props) {
	const history = useHistory()
	const id = props.id
	function addDetails(e) {
		e && e.preventDefault()

		if (props.moviesIds.has(id)) {
			props.updateLastId(id)
			history.push(`/movies/${id}`)
		}
		else {
			fetch(`http://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`)
				.then((data) => data.json())
				.then((mov) => {
					props.addDetailsToProps(id, {
						Title: mov.title,
						'Id On TMDB': id,
						'Release Date': mov.release_date,
						Language: mov.original_language,
						Popularity: mov.popularity,
						Rate: mov.vote_average,
						'Number Of Rates': mov.vote_count,
						Homepage: mov.homepage,
						Overview: mov.overview
					})
				})
				.then((x) => {
					history.push(`/movies/${id}`)
				})
		}
	}

	return props.clicked ? (
		<p>Loading... {addDetails(null)}</p>
	) : (
		<a href='' onClick={(e) => addDetails(e)}>
			More Details
		</a>
	)
}

const mapStateToProps = (state) => {
	return {
		moviesIds: state.detailedMoviesIds,
		lastId: state.lastMovieId
	}
}

const mapDispatchToProps = (dispatch) => ({
	addDetailsToProps: (id, details) =>
		dispatch({
			type: 'ADD_MOVIE_DETAILS',
			details,
			id
		}),

	updateLastId: (id) =>
		dispatch({
			type: 'UPDATE_LAST_MOVIE_ID',
			id
		})
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailsLink)
