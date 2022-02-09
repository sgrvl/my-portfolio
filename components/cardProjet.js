import { useRouter } from 'next/router';
import styled from 'styled-components';

const Wrap = styled.div`
	background-color: ${(props) => props.theme.white};
	border-radius: 4px;
	width: 375px;
	height: 375px;
	margin: 0 auto;
	color: ${(props) => props.theme.darkshades};
	padding: 2rem;
	box-shadow: 0px 0.6px 2.2px rgba(0, 0, 0, 0.008), 0px 1.3px 5.3px rgba(0, 0, 0, 0.012),
		0px 2.5px 10px rgba(0, 0, 0, 0.015), 0px 4.5px 17.9px rgba(0, 0, 0, 0.018),
		0px 8.4px 33.4px rgba(0, 0, 0, 0.022), 0px 20px 80px rgba(0, 0, 0, 0.03);

	display: grid;
	grid-template: repeat(3, min-content) auto / 1fr 1fr;
	cursor: pointer;

	h2 {
		margin: 0;
		font-size: clamp(1.5em, 3vw, 2em);
		grid-area: 1 / 1 / 2 / 3;
	}

	.date {
		color: ${(props) => props.theme.lightaccent};
		font-family: Merriweather, serif;
		font-weight: 400;
		grid-area: 2 / 1 / 3 / 3;
	}

	p {
		font-weight: 400;
		grid-area: 3 / 1 / 4 / 3;
	}

	.tech-logos {
		display: flex;
		gap: 1rem;
		align-self: end;
	}

	a {
		font-weight: 400;
		place-self: end;

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

	&:hover {
		a {
			color: ${(props) => props.theme.darkshades};
		}
	}

	@media (max-width: 500px) {
		.tech-logos {
			grid-area: 4 / 1 / 5 / 3;
			justify-self: center;
		}

		a {
			grid-area: 5 / 1 / 6 / 3;
			place-self: center;
		}
	}
`;

const Card = ({ children, link }) => {
	const router = useRouter();

	return <Wrap onClick={() => router.push(link)}>{children}</Wrap>;
};

export default Card;
