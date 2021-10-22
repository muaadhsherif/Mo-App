import { connect } from 'react-redux'
import Popular from './sections/Popular'
import TopRated from './sections/TopRated'
import GetLatest from './sections/GetLatest'

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
						id='get_latest'
						className={props.section === 'get_latest' ? 'active ' : ''}
						onClick={(e) => props.selectTVShowsSection(e.target.id)}
					>
						Get Latest
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
