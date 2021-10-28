import { connect } from 'react-redux'
import Popular from './sections/PopularShows'
import TopRated from './sections/TopRatedShows'
import GetLatest from './sections/LiveShows'

function TVShows(props) {
	let sectionUI =
		props.section === 'top_rated' ? (
			<TopRated />
		) : props.section === 'get_latest' ? (
			<GetLatest />
		) : (
			<Popular />
		)

	return (
		<>
			<aside>
				<ul>
					<li
						id='popular'
						className={
							!props.section || props.section === 'popular'
								? 'active '
								: ''
						}
						onClick={(e) => props.selectTVShowsSection(e.target.id)}
					>
						Popular
					</li>
					<li
						id='top_rated'
						className={props.section === 'top_rated' ? 'active ' : ''}
						onClick={(e) => props.selectTVShowsSection(e.target.id)}
					>
						Top Rated
					</li>
					<li
						id='live'
						className={props.section === 'live' ? 'active ' : ''}
						onClick={(e) => props.selectTVShowsSection(e.target.id)}
					>
						Live Now
					</li>
				</ul>
			</aside>
			{sectionUI}
		</>
	)
}

const mapStateToProps = (state) => {
	return {
		section: state.TVShowsSection
	}
}

const mapDispatchToProps = (dispatch) => ({
	selectTVShowsSection: (section) =>
		dispatch({
			type: 'SELECT_TVSHOWS_SECTION',
			section
		})
})

export default connect(mapStateToProps, mapDispatchToProps)(TVShows)
