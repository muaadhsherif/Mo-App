import { connect } from 'react-redux'
import fetchMovies from '../../fetchMovies'
import Details from '../Details.js'

function TopRated(props) {
	const shows = props.shows
	if (shows) {
		return (
			<table className='movies_table'>
				<thead>
					<tr>
						<th />
						<th>Title</th>
						<th>Release Date</th>
						<th>Vote Average</th>
						<th>Vote Count</th>
					</tr>
				</thead>
				<tbody>
					{shows.map((sh, n) => (
						<tr key={sh.id}>
							<td>{n + 1}</td>
							<td>{sh.name}</td>
							<td>{sh.first_air_date}</td>
							<td>{sh.vote_average}</td>
							<td>{sh.vote_count}</td>
							<td>
								<Details id={sh.id} />
							</td>
						</tr>
					))}
				</tbody>
			</table>
		)
	}
	else {
		fetchMovies(props, 'tv/top_rated')
		return <div>Loading</div>
	}
}

const mapStateToProps = (state) => {
	return {
		shows: state.topRatedShows
	}
}

const mapDispatchToProps = (dispatch) => ({
	moviesToProps: (shows) =>
		dispatch({
			type: 'GET_TOP_RATED_SHOWS',
			shows
		})
})

export default connect(mapStateToProps, mapDispatchToProps)(TopRated)
