import { useEffect, useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Logo from '../components/logo';
import NavDesktop from './navDesktop';
import NavMobile from './navMobile';

const Navbar = styled.header`
	width: 100%;
	height: 100px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-top: 1em;

	a {
		text-decoration: none;
	}
`;

const Nav = () => (
	<Navbar className='container'>
		<Link href='/' passHref>
			<a>
				<Logo />
			</a>
		</Link>
		<NavDesktop />
		<NavMobile />
	</Navbar>
);

export default Nav;
