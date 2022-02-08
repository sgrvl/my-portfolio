import Link from 'next/link';
import styled from 'styled-components';

const StyledLink = styled.a`
	text-decoration: none;
	font-size: 24px;
	color: ${(props) => props.theme.darkshades};

	&:hover,
	&:visited:hover,
	&:focus,
	&:active {
		color: ${(props) => props.theme.main};
		text-decoration: underline;
	}

	&:visited {
		color: inherit;
	}
`;

const NavLink = ({ link, text }) => (
	<Link href={link} passHref>
		<StyledLink>{text}</StyledLink>
	</Link>
);

export default NavLink;
