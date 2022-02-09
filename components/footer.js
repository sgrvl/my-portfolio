import Link from 'next/link';
import styled from 'styled-components';
import FooterExt from './footerExterne';
import FooterGit from './footerGithub';
import LogoLight from './logoLight';

const StyledFooter = styled.footer`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 5em 0;
	margin-top: 5em;
`;

const LinkEx = styled.a`
	font-size: 12px;
	color: ${(props) => props.theme.darkshades};
	display: flex;
	align-items: center;
	margin-top: 1rem;
	text-decoration: none;
	position: relative;

	&:hover::after {
		content: '';
		width: 100%;
		height: 1px;
		background-color: ${(props) => props.theme.darkshades};
		position: absolute;
		bottom: -1px;
		opacity: 0.5;
	}

	span {
		opacity: 0.75;
		font-weight: 400;
		font-family: 'Merriweather', serif;
	}
`;

const Footer = () => {
	return (
		<StyledFooter>
			<Link href='#top' passHref>
				<a>
					<LogoLight />
				</a>
			</Link>
			<Link href='https://github.com/sgrvl/my-portfolio' passHref>
				<LinkEx target='_blank' alt='Lien vers le répertoire GitHub du site.'>
					<span>Conçu et développé par Simon Gravel &copy; 2021&nbsp;</span>
					<FooterGit />
				</LinkEx>
			</Link>
		</StyledFooter>
	);
};
export default Footer;
