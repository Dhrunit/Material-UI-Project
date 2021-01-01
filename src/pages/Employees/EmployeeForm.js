import { Grid } from '@material-ui/core'
import Controls from '../../components/controls/Controls'
import React from 'react'
import { useForm, Form } from '../../components/useForm'

const genderItems = [
	{ id: 'male', title: 'Male' },
	{ id: 'female', title: 'Female' },
	{ id: 'other', title: 'Other' },
]

const initialFieldValues = {
	id: 0,
	fullName: '',
	email: '',
	mobile: '',
	city: '',
	gender: 'female',
	departmentId: '',
	hireDate: new Date(),
	isPermanent: false,
}

export default function EmployeeForm() {
	const { values, handleInputChange } = useForm(initialFieldValues)

	return (
		<Form>
			<Grid container>
				<Grid item xs={6}>
					<Controls.Input
						name='fullName'
						label='Full Name'
						value={values.fullName}
						onChange={handleInputChange}
					/>
					<Controls.Input
						name='email'
						label='Email'
						value={values.email}
						onChange={handleInputChange}
					/>
				</Grid>
				<Grid item xs={6}>
					<Controls.RadioGroup
						name='gender'
						label='Gender'
						value={values.gender}
						onChange={handleInputChange}
						items={genderItems}
					/>
				</Grid>
			</Grid>
		</Form>
	)
}
