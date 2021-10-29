import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import fetchMovies from '../../fetchMovies'

function TopRated(props) {
	const movies = props.movies
	if (movies) {
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
					{movies.map((mov, n) => (
						<tr key={mov.id}>
							<td>{n + 1}</td>
							<td>{mov.title}</td>
							<td>{mov.release_date}</td>
							<td>{mov.vote_average}</td>
							<td>{mov.vote_count}</td>
							<td>
								<Link to={`/movies/:${mov.id}`}>More Details</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		)
	}
	else {
		fetchMovies(props, 'movie/top_rated')

		return <div>Loading</div>
	}
}

const mapStateToProps = (state) => {
	return {
		movies: state.topRatedMovies
	}
}

const mapDispatchToProps = (dispatch) => ({
	moviesToProps: (movies) =>
		dispatch({
			type: 'GET_TOP_RATED_MOVIES',
			movies
		})
})

export default connect(mapStateToProps, mapDispatchToProps)(TopRated)
