import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function Nav(props) {
	return (
		<nav>
			<Link to='/'>Tv Shows</Link>
			<Link to='/'>Movies</Link>
			<div className='user'>
				Hello, <i>{props.userName}</i>
				<Link to='/login' onClick={() => props.logIn(null)}>
					Log out
				</Link>
			</div>
		</nav>
	)
}

const mapStateToProps = (state) => ({
	userName: state.userName
})

const mapDispatchToProps = (dispatch) => ({
	logIn: (userName) =>
		dispatch({
			type: 'LOGIN',
			userName
		})
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
