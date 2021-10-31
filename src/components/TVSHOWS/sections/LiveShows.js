import { connect } from 'react-redux'
import fetchMovies from '../../fetchMovies'
import DetailsLink from '../DetailsLink'

function Live(props) {
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
						<th>Popularity</th>
					</tr>
				</thead>
				<tbody>
					{shows.map((sh, n) => (
						<tr key={sh.id}>
							<td>{n + 1}</td>
							<td>{sh.name}</td>
							<td>{sh.first_air_date}</td>
							<td>{sh.vote_average}</td>
							<td>{sh.popularity}</td>
							<td>
								<DetailsLink id={sh.id} />
							</td>
						</tr>
					))}
				</tbody>
			</table>
		)
	}
	else {
		fetchMovies(props, 'tv/on_the_air')
		return <div>Loading</div>
	}
}

const mapStateToProps = (state) => {
	return {
		shows: state.liveShows
	}
}

const mapDispatchToProps = (dispatch) => ({
	moviesToProps: (shows) =>
		dispatch({
			type: 'GET_LIVE_SHOWS',
			shows
		})
})

export default connect(mapStateToProps, mapDispatchToProps)(Live)
