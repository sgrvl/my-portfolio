import React from 'react';
import styled from 'styled-components';
import Button from './button';
import { useFormik } from 'formik';
import ReCAPTCHA from 'react-google-recaptcha';
import { useState } from 'react';

const Form = styled.form`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	max-width: 720px;

	label {
		color: ${(props) => props.theme.darkshades};
	}

	input,
	textarea {
		border: none;
		border-radius: 4px;
		background-color: #eaeaeb;
		padding: 1em;

		&:focus {
			outline-color: ${(props) => props.theme.main};
		}
	}

	.grecaptcha-badge {
		${({ showCaptcha }) => (showCaptcha ? 'opacity: 100' : 'opacity: 0')};
		transition: opacity 0.7s !important;
	}
`;

const ButtonWrap = styled.div`
	display: flex;
	justify-content: center;
`;

const StyledH2 = styled.h2`
	color: ${(props) => props.theme.main};
	font-family: 'Merriweather', serif;
	font-size: clamp(2em, 10vw, 3em);
	text-align: center;
	margin-top: 2.5em;
`;

const InputGroup = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 2em;
	position: relative;

	label {
		margin-bottom: 0.5em;
	}
`;

const Error = styled.div`
	color: ${({ theme }) => theme.main};
	font-size: 0.75em;
	font-weight: 500;
	margin-top: 3px;
	position: absolute;
	bottom: -1.5em;
`;

const validate = (values) => {
	const errors = {};
	if (!values.nom) {
		errors.nom = 'Required';
	} else if (values.nom.length > 15) {
		errors.nom = 'Must be 15 characters or less';
	}

	if (!values.email) {
		errors.email = 'Required';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid email address';
	}

	if (!values.message) {
		errors.message = 'Required';
	} else if (values.message.length < 1) {
		errors.message = 'Must not be empty';
	}

	return errors;
};

const ContactForm = () => {
	const [captcha, setCaptcha] = useState(false);
	const [showCaptcha, setShowCaptcha] = useState(false);
	const recaptchaRef = React.createRef();

	const formik = useFormik({
		initialValues: {
			nom: '',
			email: '',
			message: '',
		},
		validate,
		onSubmit: (values) => {
			if (captcha) {
				alert(JSON.stringify(values, null, 2));
				recaptchaRef.current.execute();
				formik.resetForm();
				setShowCaptcha(false);
			}
		},
	});

	return (
		<>
			<StyledH2>Entrons en contact</StyledH2>
			<Form
				id='contact-form'
				onFocus={() => setShowCaptcha(true)}
				onBlur={() => setShowCaptcha(false)}
				showCaptcha={showCaptcha}
				onSubmit={formik.handleSubmit}
				method='POST'>
				<InputGroup>
					<label htmlFor='nom'>Nom</label>
					<input
						type='text'
						id='nom'
						name='nom'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.nom}
					/>
					{formik.touched.nom && formik.errors.nom ? <Error>{formik.errors.nom}</Error> : null}
				</InputGroup>
				<InputGroup>
					<label htmlFor='courriel'>Courriel</label>
					<input
						type='email'
						name='email'
						id='email'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.email}
					/>
					{formik.touched.email && formik.errors.email ? <Error>{formik.errors.email}</Error> : null}
				</InputGroup>
				<InputGroup>
					<label htmlFor='message'>Message</label>
					<textarea
						name='message'
						id='message'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.message}
						rows='10'></textarea>
					{formik.touched.message && formik.errors.message ? <Error>{formik.errors.message}</Error> : null}
				</InputGroup>
				<ReCAPTCHA
					sitekey='6LfKTGAeAAAAAFu2Zvm1XLPEi_2Dm0D3lqKQ_0CZ'
					onChange={() => setCaptcha(!captcha)}
					size='invisible'
				/>
				<ButtonWrap>
					<Button type='submit' text={'Envoyer'} />
				</ButtonWrap>
			</Form>
		</>
	);
};

export default ContactForm;