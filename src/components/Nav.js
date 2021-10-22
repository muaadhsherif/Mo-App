import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function Nav(props) {
	return (
		<nav>
			<Link to='/'>Tv Shows</Link>
			<Link to='/'>Movies</Link>
			<div className='user'>
				Hello, <u>{props.userName}</u>
				<Link to='/login'>Log out</Link>
			</div>
		</nav>
	)
}

const mapStateToProps = (state) => ({
	userName: state.userName
})

export default connect(mapStateToProps)(Nav)
