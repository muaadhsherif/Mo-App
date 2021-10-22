import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
function LogIn(props) {
	function checkUser(e) {
		e.preventDefault()

		const data = new FormData(e.target),
			username = data.get('username'),
			password = data.get('password')

		if (!localStorage.users) alert('please Sign up first')

		const allUsers = JSON.parse(localStorage.users)
		let validUserName = false
		for (let i = 0; i < allUsers.length; i++) {
			if (allUsers[i].username === username) {
				validUserName = true

				if (allUsers[i].password !== password) {
					alert('Invalid Password')
				} else {
					props.logIn(username)
				}
			}
		}
		if (!validUserName) alert('invalid username')
	}

	if (props.userName) {
		return <Redirect to='/'></Redirect>
	} else {
		return (
			<>
				<form onSubmit={checkUser}>
					<input type='text' name='username' placeholder='username' />
					<input type='password' name='password' placeholder='password' />
					<button type='submit'>login</button>
				</form>
				<p className='orSignUp'>
					Or <Link to='/sign_up'>Sign Up</Link>
				</p>
			</>
		)
	}
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

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)