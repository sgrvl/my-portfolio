import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useState } from 'react';
import NavLink from './navLink';
import Button from './navButton';
import Icon from '../icon';
import NavHamburger from './navHamburger';
import NavMenu from './navMenu';
import ThemeToggle from '../fixedLinks/themeToggle';
import Github from '../fixedLinks/github';
import Mail from '../fixedLinks/mail';
import LinkedIn from '../fixedLinks/linkedIn';

const Nav = styled.div`
	@media (min-width: 768px) {
		display: none;
	}
`;

const QuickLinks = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 1em;
	transform: scale(1.25);
`;

const NavMobile = ({ theme, setTheme }) => {
	const [open, setOpen] = useState(false);
	const router = useRouter();

	const handleOpen = () => {
		const pad = window.innerWidth - document.documentElement.clientWidth;

		!open ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto');
		document.body.style.paddingRight = `${pad}px`;
		setOpen(!open);
	};

	return (
		<Nav>
			<NavHamburger handleOpen={handleOpen} open={open} />
			<NavMenu open={open} handleOpen={handleOpen}>
				<NavLink
					handleOpen={handleOpen}
					link='/'
					text='Accueil'
					active={router.pathname === '/' ? true : false}
				/>
				<NavLink
					handleOpen={handleOpen}
					link='/projets'
					active={router.pathname === '/projets' ? true : false}
					text='Projets'
				/>
				<Button href={'/CV_Simon_Gravel.pdf'} icon={<Icon />} text={'C.V.'} />
				<QuickLinks>
					<ThemeToggle theme={theme} setTheme={setTheme} />
					<Mail />
					<Github />
					<LinkedIn />
				</QuickLinks>
			</NavMenu>
		</Nav>
	);
};

export default NavMobile;
