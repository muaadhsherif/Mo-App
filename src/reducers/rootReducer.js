const rootReducer = (state, action) => {
	switch (action.type) {
		case 'COUNT':
			return { ...state, count: action.i }

		case 'LOGIN':
			return { ...state, userName: action.userName }

		default:
			return { ...state }
	}
}

export default rootReducer
