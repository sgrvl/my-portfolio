import Footer from './footer';
import Nav from './navigation/nav';
import FixedLinks from './fixedLinks/fixedLinks';

const Layout = ({ children, theme, setTheme }) => (
	<>
		<Nav theme={theme} setTheme={setTheme} />
		<FixedLinks theme={theme} setTheme={setTheme} />
		<main>{children}</main>
		<Footer />
	</>
);

export default Layout;
