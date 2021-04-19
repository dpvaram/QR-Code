import * as React from 'react';

interface ISelectFieldProps {
	name: string;
	placeholder: string;
	options: string[];
	handleChange: (target: any) => void;
}

export const SelectField = ({ name, options, placeholder, handleChange }: ISelectFieldProps) => {
	return (
		<div style={{ display: 'flex', flexDirection: 'column', marginBottom: '6px' }}>
			<label>{placeholder}</label>
			<select name={name} onChange={handleChange}>
				{options.map((option: string, index: number) => (
					<option key={index} value={option}>{option}</option>
				))}
			</select>
		</div>
	);
}

