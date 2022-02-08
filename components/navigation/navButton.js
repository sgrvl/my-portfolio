import styled from 'styled-components';

const TopButton = styled.div`
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
		transform: translate(-6px, -6px);
	}
`;

const BottomButton = styled.div`
	position: relative;
	background-color: ${(props) => props.theme.main};
	width: 121px;
	height: 56px;
	border-radius: 4px;
`;

const StyledLink = styled.a`
	color: ${(props) => props.theme.darkshades};
`;

const Button = ({ text, href, icon }) => (
	<>
		<StyledLink href={href} target='_blank' rel='noreferrer'>
			<TopButton>
				{icon}
				{text}
			</TopButton>
			<BottomButton />
		</StyledLink>
	</>
);

export default Button;
