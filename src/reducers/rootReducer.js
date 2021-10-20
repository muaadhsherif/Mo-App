const rootReducer = (state, action) => {
	switch (action.type) {
		case 'COUNT':
			return { ...state, count: action.i }

		default:
			return { ...state }
	}
}

export default rootReducer
