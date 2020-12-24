import React from 'react'
import { makeStyles } from '@material-ui/core'
import './SideMenu.css'

const useStyles = makeStyles({
	sidemenu: {
		display: 'flex',
		height: '100%',
		flexDirection: 'column',
		width: '320px',
		position: 'absolute',
		left: '0',
		backgroundColor: '#253053',
	},
})

export default function SideMenu() {
	const classes = useStyles()
	return <div className={classes.sidemenu}></div>
}
