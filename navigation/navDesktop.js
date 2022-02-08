import styled from 'styled-components';
import NavLink from './navLink';
import Button from './navButton';
import Icon from '../components/icon';

const Links = styled.ul`
	list-style: none;
	display: flex;
	color: ${(props) => props.theme.darkshades};
	gap: 40px;
	align-items: center;

	@media (max-width: 650px) {
		display: none;
	}
`;

const NavDesktop = () => (
	<Links>
		<NavLink link='/' text='Accueil' />
		<NavLink link='/projets' text='Projets' />
		<Button href={'/CV_Simon_Gravel.pdf'} icon={<Icon />} text={'C.V.'} />
	</Links>
);

export default NavDesktop;
