import Link from 'next/link';
import styled from 'styled-components';

const TopButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: Merriweather, serif;
	font-size: 24px;
	font-weight: bold;
	gap: 10px;
	border: 2px solid ${(props) => props.theme.darkshades};
	border-radius: 4px;
	width: 121px;
	height: 56px;
	position: absolute;
	z-index: 20;
	background-color: ${(props) => props.theme.lightshades};
	transform: translate(-4px, -4px);
	cursor: pointer;
	transition: transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);

	&:hover {
		transform: translate(-5px, -5px);
	}
`;

const BottomButton = styled.div`
	position: relative;
	background-color: ${(props) => props.theme.main};
	width: 121px;
	height: 56px;
	border-radius: 4px;
`;

const Button = ({ text, type }) => (
	<>
		<TopButton type={type}>{text}</TopButton>
		<BottomButton />
	</>
);

export default Button;
