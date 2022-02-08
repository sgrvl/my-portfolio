import Footer from './footer';
import Nav from '../navigation/nav';

export default function Layout({ children }) {
	return (
		<>
			<Nav />
			<main>{children}</main>
			<Footer />
		</>
	);
}
