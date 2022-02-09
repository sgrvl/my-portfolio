import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import Card from '../../components/cardProjet';
import data from '../../components/data';

const Title = styled.h1`
	text-align: center;
	font-family: 'Merriweather', serif;
	color: ${(props) => props.theme.main};
	font-size: clamp(3em, 8vw, 5em);
`;

const Grid = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 2em;
	margin: 0 3em;
`;

const TechImg = styled.img`
	max-height: 24px;
`;

const StyledLink = styled.a`
	margin-top: 1rem;
	color: ${(props) => props.theme.main};

	&:hover,
	&:visited:hover,
	&:focus,
	&:active {
		color: ${(props) => props.theme.darkshades};
	}

	&:visited,
	&:link {
		color: ${(props) => props.theme.main};
	}
`;

export default function Projets() {
	return (
		<>
			<Head>
				<title>Simon Gravel | Projets</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className='container'>
				<Title>Projets</Title>
				<Grid>
					{Object.keys(data).map((d, index) => {
						return (
							<Card key={`Projet ${index}`} link={`/projets/${d}`}>
								<h2>{data[d].titre}</h2>
								<span className='date'>{data[d].date}</span>
								<p>{data[d].desc}</p>
								<div className='tech-logos'>
									{data[d].logos.map((l, index) => (
										<TechImg key={`Logo ${index}`} src={l.src} alt={l.alt} />
									))}
								</div>
								<Link href={`/projets/${d}`} passHref>
									<a>Lire la suite</a>
								</Link>
							</Card>
						);
					})}
					<StyledLink href='https://github.com/sgrvl' target='_blank' rel='noreferrer'>
						Voir tous mes projets sur GitHub
					</StyledLink>
				</Grid>
			</div>
		</>
	);
}
