import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Nav from './Nav'
import LogIn from './LogIn'
import SignUp from './SignUp'
import Home from './Home'
import MovieDetails from './Movies/MovieDetails'
import TVShowDetails from './TVSHOWS/TVShowDetails'
import NotFound from './NotFound'

function App(props) {
	return (
		<BrowserRouter>
			<Route
				render={() => {
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
							<>
								<Route component={Nav} />
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
										path='/TV_Shows/:id'
										component={TVShowDetails}
									/>
									<Route component={NotFound} />
								</Switch>
							</>
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
