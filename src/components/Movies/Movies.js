import { connect } from 'react-redux'
import Popular from './sections/PopularMovies'
import TopRated from './sections/TopRatedMovies'
import Upcoming from './sections/UpcomingMovies'

function Movies(props) {
	let sectionUI =
		props.section === 'top_rated' ? (
			<TopRated />
		): props.section === 'upcoming' ? (
			<Upcoming />
		) : (
			<Popular />
		)

	return (
		<>
			<aside>
				<ul>
					<li
						id='popular_movies'
						className={
							!props.section || props.section === 'popular_movies'
								? 'active '
								: ''
						}
						onClick={(e) => props.selectMoviesSection(e.target.id)}
					>
						Popular
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
