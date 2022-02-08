import styled from 'styled-components';

// Adapté de -> https://codepen.io/ainalem/pen/wvKOEMV

const Button = styled.button`
	background-color: transparent;
	border: none;
	cursor: pointer;
	display: flex;
	padding: 0;

	position: relative;
	z-index: 110;

	.line1 {
		stroke-dasharray: 60 207;
		stroke-width: 6;
		stroke-linecap: round;
	}

	.line2 {
		stroke-dasharray: 60 60;
		stroke-width: ;
		stroke-linecap: round;
	}

	.line3 {
		stroke-dasharray: 60 207;
		stroke-width: 6;
		stroke-linecap: round;
	}

	${(props) =>
		props.open &&
		`
		.line1 {
			stroke-dasharray: 90 207;
			stroke-dashoffset: -134;
			stroke-width: 6;
		}
		.line2 {
			stroke-dasharray: 1 60;
			stroke-dashoffset: -30;
			stroke-width: 6;
		}
		.line3 {
			stroke-dasharray: 90 207;
			stroke-dashoffset: -134;
			stroke-width: 6;
		}
	`}
`;

const Line = styled.path`
	fill: none;
	stroke: ${(props) => props.theme.darkshades};
	stroke-width: 6;
	transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
		stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
`;

const NavHamburger = ({ open, handleOpen }) => {
	return (
		<Button onClick={handleOpen} open={open} aria-label='Main Menu'>
			<svg width='55' height='55' viewBox='0 0 100 100'>
				<Line
					className='line1'
					d='M 20,30 H 80 C 80,30 95,30 95,65 95,75 90,80 85,80 80,80 75,75 75,75 L 25,25'
				/>
				<Line className='line2' d='M 20,50 H 80' />
				<Line
					className='line3'
					d='M 20,70 H 80 C 80,70 95,70 95,35 95,20 90,20 85,20 80,20 75,25 75,25 L 25,75'
				/>
			</svg>
		</Button>
	);
};

export default NavHamburger;
