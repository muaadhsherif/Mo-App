const rootReducer = (state, action) => {
	switch (action.type) {
		case 'LOGIN':
			return { ...state, userName: action.userName }

		case 'SELECT_SHOW_TYPE':
			return { ...state, show: action.show }

		default:
			return { ...state }
	}
}

export default rootReducer
