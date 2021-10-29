import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import fetchMovies from '../../fetchMovies'

function Popular(props) {
	const shows = props.shows
	if (shows) {
		return (
			<table className='movies_table'>
				<thead>
					<tr>
						<th />
						<th>Title</th>
						<th>Release Date</th>
						<th>Popularity</th>
						<th />
					</tr>
				</thead>
				<tbody>
					{shows.map((sh, n) => (
						<tr key={sh.id}>
							<td>{n + 1}</td>
							<td>{sh.name}</td>
							<td>{sh.first_air_date}</td>
							<td>{sh.popularity}</td>
							<td>
								<Link to={`/TV_Shows/${sh.id}`}>More Details</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		)
	}
	else {
		fetchMovies(props, 'tv/popular')
		return <div>Loading</div>
	}
}

const mapStateToProps = (state) => {
	return {
		shows: state.popularShows
	}
}

const mapDispatchToProps = (dispatch) => ({
	moviesToProps: (shows) =>
		dispatch({
			type: 'GET_POPULAR_SHOWS',
			shows
		})
})

export default connect(mapStateToProps, mapDispatchToProps)(Popular)
