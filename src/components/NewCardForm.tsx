import styled from 'styled-components';

export const FormGroup = styled.div`
	color: palevioletred;
	display: block;
	width: 300px;
	margin: 50px auto;
`;

export const Label = styled.label`
	margin-bottom: 0.5em;
	color: palevioletred;
	display: block;
`;

export const Input = styled.input`
	padding: 0.5em;
	color: palevioletred;
	background: papayawhip;
	border: none;
	border-radius: 3px;
	width: 100%;
	margin-bottom: 0.5em;
`;

export const Message = styled.label`
	margin-bottom: 0.5em;
	color: palevioletred;
	display: block;
`;

export function NewCardForm() {
	return (
		<>
			<FormGroup>
				<Label htmlFor="label">Word</Label>
				<Input id="label" />
				<Message>This is the validation message</Message>
			</FormGroup>
			<FormGroup>
				<Label>Meaning</Label>
				<Input />
				<Message>This is the validation message</Message>
			</FormGroup>
		</>
	);
}
