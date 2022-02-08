import { useRouter } from 'next/router';
import styled from 'styled-components';
import NavLink from './navLink';
import Button from './navButton';
import Icon from '../icon';

const Links = styled.ul`
	list-style: none;
	display: flex;
	color: ${(props) => props.theme.darkshades};
	gap: 40px;
	align-items: center;

	@media (max-width: 768px) {
		display: none;
	}

	.activeLink {
		position: relative;

		&::after {
			content: '';
			position: absolute;
			height: 2px;
			width: 100%;
			background-color: ${(props) => props.theme.main};
			left: 0;
			bottom: -2px;
			border-radius: 4px;
		}
	}
`;

const NavDesktop = () => {
	const router = useRouter();

	return (
		<Links>
			<NavLink link='/' text='Accueil' active={router.pathname === '/' ? true : false} />
			<NavLink link='/projets' active={router.pathname === '/projets' ? true : false} text='Projets' />
			<Button href={'/CV_Simon_Gravel.pdf'} icon={<Icon />} text={'C.V.'} />
		</Links>
	);
};

export default NavDesktop;
