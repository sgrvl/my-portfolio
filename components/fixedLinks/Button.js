import styled from 'styled-components';

const StyledButton = styled.button`
	border: none;
	background-color: transparent;
	cursor: pointer;
	transition: transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);

	&:hover {
		transform: translateY(-3px);
		svg {
			stroke: ${({ theme }) => theme.main};
		}
	}
`;

const Button = ({ children, onClick }) => <StyledButton onClick={onClick}>{children}</StyledButton>;

export default Button;
