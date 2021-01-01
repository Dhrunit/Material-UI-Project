import { TextField } from '@material-ui/core'
import React from 'react'

export default function input(props) {
	const { name, label, value, onChange } = props
	return (
		<div>
			<TextField
				variant='outlined'
				name={name}
				label={label}
				value={value}
				onChange={onChange}
			/>
		</div>
	)
}
