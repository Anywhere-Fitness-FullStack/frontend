import React from 'react';
import { Button, Form, Input, Label } from 'reactstrap';

const AddClassForm = (props) => {
	const { values, submit, change, disabled, errors } = props;

	const onSubmit = (evt) => {
		evt.preventDefault();
		submit();
	};

	const onChange = (evt) => {
		const { name, value } = evt.target;

		change(name, value);
	};

	return (
		<Form onSubmit={onSubmit}>
			<h2>ADD Class</h2>

			<div>
				<div>{errors.class_name}</div>
				<div>{errors.class_type}</div>
				<div>{errors.dropdown}</div>
				<div>{errors.start}</div>
			</div>
			<Label>
				Class Name:
				<Input
					name="class_name"
					type="text"
					value={values.class_name}
					onChange={onChange}
				/>
			</Label>
			<br />
			<Label>
				Class Type
				<Input
					type="text"
					name="class_type"
					value={values.class_type}
					onChange={onChange}
				/>
			</Label>
			<br />
			<Label>
				Start Time
				<Input
					type="time"
					name="start_time"
					value={values.start_time}
					onChange={onChange}
				/>
			</Label>
			<br />
			<Label>
				Duration
				<Input
					name="duration"
					type="number"
					min="0"
					placeholder="minutes"
					value={values.duration}
					onChange={onChange}
				/>
			</Label>
			<br />
			<Label>
				Intensity Level
				<select
					name="intensity_level"
					value={values.intensity_level}
					onChange={onChange}
				>
					<option>-Select Intensity-</option>
					<option>1</option>
					<option>2</option>
					<option>3</option>
					<option>4</option>
					<option>5</option>
				</select>
			</Label>
			<br />
			<Label>
				Location
				<Input
					type="text"
					name="location"
					value={values.location}
					onChange={onChange}
				/>
			</Label>
			{/* <br />
			<Label>
				Current Clients
				<Input
					name="current_clients"
					type="number"
					min="0"
					value={values.current_clients}
					onChange={onChange}
				/>
			</Label> */}
			<br />
			<Label>
				Max Class Size
				<Input
					type="number"
					min="0"
					name="max_class_size"
					value={values.max_class_size}
					onChange={onChange}
				/>
			</Label>
			<br />

			{/* ERRORS */}
			<Button disabled={disabled} type="submit">
				Create Class
			</Button>
		</Form>
	);
};

export default AddClassForm;
