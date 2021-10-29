import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function Details(props) {
	const id = props.id
	function addDetails() {
		if (props.showsIds.includes(id)) {
			return
		}
		else {
			fetch(`http://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_API_KEY}`)
				.then((data) => data.json())
				.then((show) => {
					props.addDetailsToProps(id, { overview: show.overview })
				})
		}
	}

	return (
		<Link to={`/TV_Shows/${props.id}`} onClick={addDetails}>
			More Details
		</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(Details)
