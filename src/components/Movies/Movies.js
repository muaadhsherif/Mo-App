import { connect } from 'react-redux'
import AllMovies from './sections/AllMovies'
import Popular from './sections/PopularMovies'
import TopRated from './sections/TopRatedMovies'
import RecentMovies from './sections/RecentMovies'
import Upcoming from './sections/UpcomingMovies'

function Movies(props) {
	let sectionUI =
		props.section === 'popular_movies' ? (
			<Popular />
		) : props.section === 'top_rated' ? (
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
						id='popular_movies'
						className={props.section === 'popular_movies' ? 'active ' : ''}
						onClick={(e) => props.selectMoviesSection(e.target.id)}
					>
						Popular
					</li>

					<li
						id='recent_movies'
						className={props.section === 'recent_movies' ? 'active ' : ''}
						onClick={(e) => props.selectMoviesSection(e.target.id)}
					>
						Recent
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

const mapStateToProps = (state) => ({
	section: state.moviesSection
})

const mapDispatchToProps = (dispatch) => ({
	selectMoviesSection: (section) =>
		dispatch({
			type: 'SELECT_MOVIES_SECTION',
			section
		})
})

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
