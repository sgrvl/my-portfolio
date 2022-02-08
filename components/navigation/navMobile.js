import styled from 'styled-components';
import NavLink from './navLink';
import Button from './navButton';
import Icon from '../icon';
import NavHamburger from './navHamburger';

const Nav = styled.div`
	@media (min-width: 992px) {
		display: none;
	}
`;

const NavMobile = () => (
	<Nav>
		<NavHamburger />
	</Nav>
);

export default NavMobile;
