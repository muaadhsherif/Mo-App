import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import fetchMovies from '../../fetchMovies'

function Upcoming(props) {
	const movies = props.movies
	if (movies) {
		return (
			<table className='movies_table'>
				<thead>
					<tr>
						<th />
						<th>Title</th>
						<th>Release Date</th>
						<th>Language</th>
					</tr>
				</thead>
				<tbody>
					{movies.map((mov, n) => (
						<tr key={mov.id}>
							<td>{n + 1}</td>
							<td>{mov.title}</td>
							<td>{mov.release_date}</td>
							<td>{mov.original_language}</td>
							<td>
								<Link to={`/movies/${mov.id}`}>More Details</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		)
	}
	else {
		fetchMovies(props, 'movie/upcoming')

		return <div>Loading</div>
	}
}

const mapStateToProps = (state) => {
	return {
		movies: state.upcomingMovies
	}
}

const mapDispatchToProps = (dispatch) => ({
	moviesToProps: (movies) =>
		dispatch({
			type: 'GET_UPCOMING_MOVIES',
			movies
		})
})

export default connect(mapStateToProps, mapDispatchToProps)(Upcoming)
