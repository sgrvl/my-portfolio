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

const theme = {
	white: '#F9F9F9',
	lightshades: '#F5F5F5',
	lightaccent: '#DB998C',
	main: '#F45D48',
	darkaccent: '#817F88',
	darkshades: '#2C2F37',
};

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<Layout>
				<GlobalStyle />
				<Component {...pageProps} />{' '}
			</Layout>
		</ThemeProvider>
	);
}

export default MyApp;
