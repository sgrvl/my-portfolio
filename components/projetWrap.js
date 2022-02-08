import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import Projet from './projet';
import data from './data';

const Wrap = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 2em;
`;

const BigWrap = styled.div`
	a {
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
	}
`;

const H2Title = styled.h2`
	color: ${(props) => props.theme.main};
	font-family: 'Merriweather', serif;
	font-size: clamp(2em, 10vw, 3em);
	text-align: center;
`;

const LinkMore = styled.a`
	font-weight: 400;
	text-decoration: underline;
	font-size: 24px;
	text-align: center;
	display: block;
	margin: 2em;
	font-weight: 500;
`;

const TechImg = styled.img`
	max-height: 24px;
`;

export default function ProjetWrap() {
	return (
		<BigWrap>
			<H2Title>Projets Récents</H2Title>
			<Wrap>
				{Object.keys(data).map((d, index) => {
					// nombre de projet qui est affiché sur la première page
					if (index < 2) {
						return (
							<Projet key={`Projet ${index}`} link={`/projets/${d}`}>
								<Image
									src={data[d].couverture.src}
									alt={data[d].couverture.alt}
									width={788}
									height={381}
								/>
								<h3>{data[d].titre}</h3>
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
							</Projet>
						);
					}
				})}
			</Wrap>
			<Link href='/projets' passHref>
				<LinkMore>Voir tous mes projets</LinkMore>
			</Link>
		</BigWrap>
	);
}
