import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import LogIn from './LogIn'
import SignUp from './SignUp'
import Home from './Home'
import MovieDetails from './MovieDetails'
import TVShowDetails from './TVShowDetails'
import NotFound from './NotFound'

function App(props) {
	return (
		<BrowserRouter>
			<Route
				render={() => {
					console.log(props)
					if (!props.userName) {
						return (
							<>
								<Switch>
									<Route exact path='/sign_up' component={SignUp} />
									<Route component={LogIn} />
								</Switch>
							</>
						)
					} else {
						return (
							<Switch>
								<Route exact path='/login' component={LogIn} />
								<Route exact path='/sign_up' component={SignUp} />
								<Route exact path='/' component={Home} />
								<Route
									exact
									path='/movies/:id'
									component={MovieDetails}
								/>
								<Route
									exact
									path='/TV_Shows:id'
									component={TVShowDetails}
								/>
								<Route component={NotFound} />
							</Switch>
						)
					}
				}}
			/>
		</BrowserRouter>
	)
}

const mapStateToProps = (state) => ({
	userName: state.userName
})

export default connect(mapStateToProps)(App)
