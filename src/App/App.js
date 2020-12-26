import React from 'react'
import './App.css'
import SideMenu from '../components/SideMenu'
import Header from '../components/Header'
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline'
import {
	CssBaseline,
	makeStyles,
	createMuiTheme,
	ThemeProvider,
} from '@material-ui/core'
import PageHeader from '../components/PageHeader'

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#333996',
			light: '#3c44b126',
		},
		secondary: {
			main: '#f83245',
			light: '#f8324526',
		},
		background: {
			default: '#f4f5fd',
		},
	},
})

const useStyles = makeStyles({
	appMain: {
		paddingLeft: '320px',
		width: '100%',
	},
})

function App() {
	const classes = useStyles()
	return (
		<ThemeProvider theme={theme}>
			<SideMenu />
			<div className={classes.appMain}>
				<Header />
				<PageHeader
					title='Page header'
					subTitle='Page description'
					icon={<PeopleOutlineIcon fontSize='large' />}
				/>
			</div>
			<CssBaseline />
		</ThemeProvider>
	)
}

export default App
