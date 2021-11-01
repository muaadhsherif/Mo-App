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

		case 'GET_TOP_RATED_SHOWS':
			return { ...state, topRatedShows: action.shows }

		case 'GET_LIVE_SHOWS':
			return { ...state, liveShows: action.shows }

		/* End Get Shows */

		case 'ADD_SHOW_DETAILS':
			return {
				...state,
				showsDetails: { ...state.showsDetails, [action.id]: action.details },
				detailedShowsIds: new Set([ ...state.detailedShowsIds, action.id ]),
				lastShowId: action.id
			}

		case 'ADD_MOVIE_DETAILS':
			return {
				...state,
				moviesDetails: { ...state.moviesDetails, [action.id]: action.details },
				detailedMoviesIds: new Set([ ...state.detailedMoviesIds, action.id ]),
				lastMovieId: action.id
			}

		default:
			return {
				...state,
				showsDetails: {},
				detailedShowsIds: new Set(),
				moviesDetails: {},
				detailedMoviesIds: new Set()
			}
	}
}

export default rootReducer
