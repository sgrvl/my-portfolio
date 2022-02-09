import { useRouter } from 'next/router';
import styled from 'styled-components';

const Wrap = styled.div`
	background-color: ${(props) => props.theme.white};
	border-radius: 4px;
	max-width: 550px;
	@media (max-width: 768px) {
		max-width: 788px;
	}
	@media (min-width: 992px) {
		max-width: 650px;
	}
	@media (min-width: 1200px) {
		max-width: 788px;
	}
	margin: 0 auto;
	color: ${(props) => props.theme.darkshades};
	padding-bottom: 2rem;
	box-shadow: 0px 0.6px 2.2px rgba(0, 0, 0, 0.008), 0px 1.3px 5.3px rgba(0, 0, 0, 0.012),
		0px 2.5px 10px rgba(0, 0, 0, 0.015), 0px 4.5px 17.9px rgba(0, 0, 0, 0.018),
		0px 8.4px 33.4px rgba(0, 0, 0, 0.022), 0px 20px 80px rgba(0, 0, 0, 0.03);

	span {
		border-radius: 4px 4px 0 0;
		grid-area: 1 / 1 / 2 / 3;
	}

	h3,
	.date,
	p,
	.tech-logos,
	a {
		padding: 0 2rem;
	}

	h3 {
		margin-bottom: 0.25rem;
		grid-area: 2 / 1 / 3 / 3;
		font-size: clamp(24px, 2.5vw, 32px);
	}

	.date {
		color: ${(props) => props.theme.lightaccent};
		font-family: Merriweather, serif;
		font-weight: 400;
		grid-area: 3 / 1 / 4 / 3;
	}

	p {
		font-weight: 400;
		grid-area: 4 / 1 / 4 / 3;
	}

	.tech-logos {
		grid-area: 5 / 1 / 6 / 2;
		display: flex;
		gap: 1rem;
		padding-top: 2rem;
	}

	a {
		grid-area: 5 / 2 / 6 / 3;
		place-self: end;
		font-weight: 400;

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

	cursor: pointer;
	&:hover {
		a {
			color: ${(props) => props.theme.darkshades} !important;
		}
	}

	@media (max-width: 500px) {
		.tech-logos {
			grid-area: 5 / 1 / 6 / 3;
			place-self: center;
			padding: 1rem;
		}

		a {
			grid-area: 6 / 1 / 7 / 3;
			place-self: center;
			margin-top: 1rem;
		}
	}

	display: grid;
	grid-template: repeat(5, auto) / 1fr 1fr;
`;

const Projet = ({ children, link }) => {
	const router = useRouter();
	return <Wrap onClick={() => router.push(link)}>{children}</Wrap>;
};

export default Projet;
