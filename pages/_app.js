import { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Layout from '../components/layout';
import '../styles/font.css';

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
	}

	body {
		padding: 0;
		margin: 0;
		font-family: 'Inter', sans-serif;
		font-weight: 600;
		background-color: ${(props) => props.theme.lightshades};
		overflow-x: hidden;
	}

	.container {
  		padding-right: 15px;
  		padding-left: 15px;
  		margin-right: auto;
  		margin-left: auto;
		  
		@media (min-width: 768px) {
			width: 750px;
		}
		@media (min-width: 992px) {
			width: 970px;		
		}
		@media (min-width: 1200px) {
			width: 1170px;		
		}
	}	
`;

const light = {
	white: '#F9F9F9',
	form: '#EAEAEB',
	lightshades: '#F5F5F5',
	lightaccent: '#DB998C',
	main: '#F45D48',
	darkaccent: '#817F88',
	darkshades: '#2C2F37',
};

const dark = {
	white: '#3D3F47',
	form: '#3D3F47',
	lightshades: '#2C2F37',
	lightaccent: '#77A486',
	main: '#2BEE9D',
	darkaccent: '#817F88',
	darkshades: '#F5F5F5',
};

const MyApp = ({ Component, pageProps }) => {
	const [theme, setTheme] = useState(true);
	return (
		<ThemeProvider theme={theme ? light : dark}>
			<Layout theme={theme} setTheme={setTheme}>
				<GlobalStyle />
				<Component {...pageProps} />{' '}
			</Layout>
		</ThemeProvider>
	);
};

export default MyApp;
