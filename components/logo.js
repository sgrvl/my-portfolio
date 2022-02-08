import styled from 'styled-components';

const LogoStyled = styled.div`
	margin: 0;
	font-family: 'Merriweather', serif;
	font-weight: 700;
	font-size: 3em;
	text-decoration: none;
	color: ${(props) => props.theme.darkshades};
`;

const Logo = () => <LogoStyled>SG.</LogoStyled>;

export default Logo;
