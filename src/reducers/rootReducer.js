const rootReducer = (state, action) => {
	switch (action.type) {
		case 'LOGIN':
			return { ...state, userName: action.userName }

		case 'SELECT_SHOW_TYPE':
			return { ...state, show: action.show }

		case 'SELECT_TVSHOWS_SECTION':
			return { ...state, TVShowsSection: action.section }

		case 'SELECT_MOVIES_SECTION':
			return { ...state, moviesSection: action.section }

		/* Start Get Movies */

		case 'GET_POPULAR_MOVIES':
			return { ...state, popularMovies: action.movies }

		case 'GET_TOP_RATED_MOVIES':
			return { ...state, topRatedMovies: action.movies }

		case 'GET_UPCOMING_MOVIES':
			return { ...state, upcomingMovies: action.movies }

		/* End Get Movies */

		/* Start Get Shows */

		case 'GET_POPULAR_SHOWS':
			return { ...state, popularShows: action.shows }

		/* End Get Shows */

		default:
			return { ...state }
	}
}

export default rootReducer
