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

		/* End Get Movies */

		default:
			return { ...state }
	}
}

export default rootReducer
