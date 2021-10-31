import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

function DetailsLink(props) {
	const history = useHistory()
	const id = props.id
	function addDetails(e) {
		e && e.preventDefault()

		if (props.showsIds.includes(id)) {
		}
		else {
			fetch(`http://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_API_KEY}`)
				.then((data) => data.json())
				.then((show) => {
					props.addDetailsToProps(id, {
						Title: show.name,
						'Id On TMDB': show.id,
						'Release Date': show.first_air_date,
						'Last Air Date': show.last_air_date,
						Episodes: show.number_of_episodes,
						Seasons: show.number_of_seasons,
						Languages: show.languages,
						Popularity: show.popularity,
						Type: show.type,
						Rate: show.vote_average,
						'Number Of Rates': show.vote_count,
						Overview: show.overview
					})
				})
		}
		history.push(`/TV_Shows/${id}`)
	}

	return (
		<a href='' onClick={(e) => addDetails(e)}>
			{props.clicked && addDetails(null)} More Details
		</a>
	)
}

const mapStateToProps = (state) => {
	return {
		showsIds: state.detailedShowsIds
	}
}

const mapDispatchToProps = (dispatch) => ({
	addDetailsToProps: (id, details) =>
		dispatch({
			type: 'ADD_SHOW_DETAILS',
			details,
			id
		})
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailsLink)
