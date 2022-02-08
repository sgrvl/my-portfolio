import Link from 'next/link';
import styled from 'styled-components';

const StyledLink = styled.a`
	text-decoration: none;
	font-size: 24px;
	color: ${(props) => props.theme.darkshades};
	transition: transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);

	${(props) =>
		props.active &&
		`
		&:hover,
		&:visited:hover {
		color: ${props.theme.main};
		transform: translate(-2px, -2px);
	}
	`}

	&:focus,
	&:active {
		color: ${(props) => props.theme.main};
	}

	&:visited {
		color: ${(props) => props.theme.darkshades};
	}
`;

const NavLink = ({ link, text, active, handleOpen }) => (
	<Link href={link} passHref>
		<StyledLink onClick={handleOpen} active={!active} className={active ? 'activeLink' : null} text={text}>
			{text}
		</StyledLink>
	</Link>
);

export default NavLink;
