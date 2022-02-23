import styled from 'styled-components';

const FormWrapper = styled.div`
	border-radius: 6px;
	border: 1px solid green;
`;

const FormGroup = styled.div`
	color: palevioletred;
	display: block;
	width: 300px;
	margin: 50px auto;
`;

const Label = styled.label`
	margin-bottom: 0.5em;
	color: palevioletred;
	display: block;
`;

const Input = styled.input`
	padding: 0.5em;
	color: palevioletred;
	background: papayawhip;
	border: none;
	border-radius: 3px;
	width: 100%;
	margin-bottom: 0.5em;
`;

const Message = styled.label`
	margin-bottom: 0.5em;
	color: palevioletred;
	display: block;
`;

export function NewCardForm() {
	return (
		<FormWrapper>
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
		</FormWrapper>
	);
}
