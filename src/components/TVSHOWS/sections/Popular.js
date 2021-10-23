import { connect } from 'react-redux'
//import fetchMovies from '../fetchMovies'

function Popular(props) {
	console.log(props.movies)
	const movies = props.movies
	if (movies) {
		return (
			<table className='movies_table'>
				<thead>
					<tr>
						<th></th>
						<th>Title</th>
						<th>Release Date</th>
						<th>Popularity</th>
					</tr>
				</thead>
				<tbody>
					{movies.map((mov, n) => (
						<tr key={mov.id}>
							<td>{n}</td>
							<td>{mov.title}</td>
							<td>{mov.release_date}</td>
							<td>{mov.popularity}</td>
						</tr>
					))}
				</tbody>
			</table>
		)
	} else {
		//fetchMovies(props, 'movie/popular')
		fetch(
			`http://api.themoviedb.org/3/movie/popular?api_key=8ea69ef6d8e54cbfeab77e1fdd807436`
		)
			.then((data) => data.json())
			.then((json) => {
				let movies = json.results
				props.moviesToProps(movies)
			})
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
