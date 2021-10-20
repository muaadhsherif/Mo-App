import { connect } from 'react-redux'

function App(props) {
	return <div></div>
}

const mapStateToProps = (state) => ({
	num: state.count,
})

const mapDispatchToProps = (dispatch) => ({
	count: dispatch({
		type: 'COUNT',
		i: '1',
	}),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
