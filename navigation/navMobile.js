import styled from 'styled-components';
import NavLink from './navLink';
import Button from './navButton';
import Icon from '../components/icon';

const Nav = styled.div`
	@media (min-width: 650px) {
		display: none;
	}
`;

const Hamburger = styled.div``;

const NavMobile = () => (
	<Nav>
		<Hamburger></Hamburger>
	</Nav>
);

export default NavMobile;
