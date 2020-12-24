import './App.css'
import SideMenu from '../components/SideMenu'
import Header from '../components/Header'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
	appMain: {
		paddingLeft: '320px',
		width: '100%',
	},
})

function App() {
	const classes = useStyles()
	return (
		<div className={classes.appMain}>
			<SideMenu />
			<Header />
		</div>
	)
}

export default App
