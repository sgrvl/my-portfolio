import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import Logo from '../public/images/logo-light.png'
import externalLink from '../public/images/external-link.png'

const StyledFooter = styled.footer`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 5em 0;
	margin-top: 5em;

	a {
		text-decoration: none;
	}
`

const LinkEx = styled.a`
	font-size: 0.75em;
	color: ${(props) => props.theme.darkaccent};
`

export default function Footer() {
	return (
		<StyledFooter>
			<Link href='#top' passHref>
				<a>
					<Image src={Logo} alt='Logo du site.' />
				</a>
			</Link>
			<Link href='https://github.com/sgrvl' passHref ta>
				<LinkEx target='_blank' alt='Lien vers le répertoire GitHub du site.'>
					Conçu et développé par Simon Gravel &copy; 2021 <Image src={externalLink} alt='Lien externe' />
				</LinkEx>
			</Link>
		</StyledFooter>
	)
}
