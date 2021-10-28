import { connect } from 'react-redux'
import fetchMovies from '../../fetchMovies'

function Popular(props) {
	const movies = props.movies
	if (movies) {
		return (
			<table className='movies_table'>
				<thead>
					<tr>
						<th />
						<th>Title</th>
						<th>Release Date</th>
						<th>Popularity</th>
					</tr>
				</thead>
				<tbody>
					{movies.map((mov, n) => (
						<tr key={mov.id}>
							<td>{n + 1}</td>
							<td>{mov.title}</td>
							<td>{mov.release_date}</td>
							<td>{mov.popularity}</td>
						</tr>
					))}
				</tbody>
			</table>
		)
	}
	else {
		fetchMovies(props, 'movie/popular')
		return <div>Loading</div>
	}
}

const mapStateToProps = (state) => {
	return {
		movies: state.popularMovies
	}
}

const mapDispatchToProps = (dispatch) => ({
	moviesToProps: (movies) =>
		dispatch({
			type: 'GET_POPULAR_MOVIES',
			movies
		})
})

export default connect(mapStateToProps, mapDispatchToProps)(Popular)
