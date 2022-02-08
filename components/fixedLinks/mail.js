import styled from 'styled-components';
import Button from './Button';

const StyledSvg = styled.svg`
	stroke: ${(props) => props.theme.darkshades};
`;

const Mail = () => (
	<a href='mailto:contact@simongravel.ca'>
		<Button>
			<StyledSvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path d='M22 6L12 13L2 6' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
			</StyledSvg>
		</Button>
	</a>
);

export default Mail;
