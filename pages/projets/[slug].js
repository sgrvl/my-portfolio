import Image from 'next/image';
import data from '../../public/data';

export async function getStaticProps({ params }) {
	const pageData = Object.keys(data).filter((d) => d === params.slug);

	return {
		props: {
			pageData: data[pageData[0]],
		},
	};
}

export async function getStaticPaths() {
	const paths = Object.keys(data).map((d) => ({
		params: { slug: d },
	}));
	return { paths, fallback: false };
}

export default function PageProjet({ pageData }) {
	return (
		<div className='container'>
			<h1>{pageData.titre}</h1>
			<Image src={pageData.couverture.src} alt={pageData.couverture.alt} width={788} height={381} />
		</div>
	);
}
