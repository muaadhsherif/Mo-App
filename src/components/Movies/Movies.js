import { connect } from 'react-redux'
import AllMovies from './sections/AllMovies'
import TopRated from './sections/TopRated'
import RecentMovies from './sections/RecentMovies'
import Upcoming from './sections/Upcoming'

function Movies(props) {
	let sectionUI =
		props.section === 'top_rated' ? (
			<TopRated />
		) : props.section === 'recent_movies' ? (
			<RecentMovies />
		) : props.section === 'upcoming' ? (
			<Upcoming />
		) : (
			<AllMovies />
		)

	return (
		<>
			<aside>
				<ul>
					<li
						id='all_movies'
						className={
							!props.section || props.section === 'all_movies'
								? 'active '
								: ''
						}
						onClick={(e) => props.selectMoviesSection(e.target.id)}
					>
						All Movies
					</li>

					<li
						id='recent_movies'
						className={props.section === 'recent_movies' ? 'active ' : ''}
						onClick={(e) => props.selectMoviesSection(e.target.id)}
					>
						Recent Movies
					</li>

					<li
						id='top_rated'
						className={props.section === 'top_rated' ? 'active ' : ''}
						onClick={(e) => props.selectMoviesSection(e.target.id)}
					>
						Top Rated
					</li>

					<li
						id='upcoming'
						className={props.section === 'upcoming' ? 'active ' : ''}
						onClick={(e) => props.selectMoviesSection(e.target.id)}
					>
						Upcoming
					</li>
				</ul>
			</aside>
			{sectionUI}
		</>
	)
}

const mapStateToProps = (state) => {
	return {
		section: state.moviesSection
	}
}

const mapDispatchToProps = (dispatch) => ({
	selectMoviesSection: (section) =>
		dispatch({
			type: 'SELECT_MOVIES_SECTION',
			section
		})
})

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
