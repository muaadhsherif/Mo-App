import { connect } from 'react-redux'
import Movies from './Movies/Movies'
import TVShows from './TVSHOWS/TVShows'

function Home(props) {
	const showUI = props.show === 'TVShows' ? <TVShows /> : <Movies />

	return (
		<>
			<div className='toggle_show'>
				<button
					className={props.show !== 'TVShows' ? 'active ' : ''}
					id='movies'
					onClick={(e) => props.selectShowType(e.target.id)}
				>
					Movies
				</button>
				<button
					className={props.show === 'TVShows' ? 'active ' : ''}
					id='TVShows'
					onClick={(e) => props.selectShowType(e.target.id)}
				>
					TV Shows
				</button>
			</div>
			{showUI}
		</>
	)
}

const mapStateToProps = (state) => {
	return {
		show: state.show
	}
}

const mapDispatchToProps = (dispatch) => ({
	selectShowType: (show) =>
		dispatch({
			type: 'SELECT_SHOW_TYPE',
			show
		})
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
