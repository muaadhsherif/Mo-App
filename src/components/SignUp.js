import { Link } from 'react-router-dom'

function SignUp() {
	function addUser(e) {
		e.preventDefault()

		/* let data = e.target

      console.log(data.age.value) */

		const data = new FormData(e.target),
			username = data.get('username'),
			password = data.get('password')

		if (username.length < 8 || password.length < 8) {
			return alert('Username & Password should be 7 characters at least.')
		}

		const newUser = {
			username,
			password
		}

		if (!localStorage.users) {
			localStorage.users = JSON.stringify([newUser])
		} else {
			const allUsers = JSON.parse(localStorage.users)

			for (let i = 0; i < allUsers.length; i++) {
				if (allUsers[i].username === username) {
					return alert('this username is already used.')
				}
			}

			allUsers.push(newUser)

			localStorage.users = JSON.stringify(allUsers)
		}
	}

	return (
		<>
			<form onSubmit={addUser}>
				<input type='text' name='username' placeholder='username' />
				<input type='password' name='password' placeholder='password' />
				<button type='submit'>Sign Up</button>
			</form>
			<p className='orSignUp'>
				Or <Link to='/login'>Log In</Link>
			</p>
		</>
	)
}

export default SignUp
