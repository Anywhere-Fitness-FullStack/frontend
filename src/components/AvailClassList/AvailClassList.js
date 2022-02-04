import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ClassFilter from './ClassFilter';
import { FilterContainer } from '../../styled-comps/index';

const AvailClassList = () => {
	const initialState = [];
	const [classes, setClasses] = useState(initialState);

	useEffect(() => {
		axios
			.get('https://anywhere-fitness-07-backend.herokuapp.com/api/classes')
			.then((res) => {
				console.log(res.data);
				setClasses(res.data);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<FilterContainer>
			<h2>Available Classes</h2>
			<ClassFilter classes={classes} />
		</FilterContainer>
	);
};

export default AvailClassList;
