import styled from 'styled-components';
import Button from './Button';

const StyledSvg = styled.svg`
	stroke: ${(props) => props.theme.darkshades};
`;
const Externe = ({ link }) => (
	<a href={link} target='_blank' rel='noreferrer'>
		<Button>
			<StyledSvg width='80' height='80' viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M60 43.3333V63.3333C60 65.1014 59.2976 66.7971 58.0474 68.0474C56.7971 69.2976 55.1014 70 53.3333 70H16.6667C14.8986 70 13.2029 69.2976 11.9526 68.0474C10.7024 66.7971 10 65.1014 10 63.3333V26.6667C10 24.8986 10.7024 23.2029 11.9526 21.9526C13.2029 20.7024 14.8986 20 16.6667 20H36.6667'
					strokeWidth='5'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path d='M50 10H70V30' strokeWidth='5' strokeLinecap='round' strokeLinejoin='round' />
				<path d='M33.333 46.6667L69.9997 10' strokeWidth='5' strokeLinecap='round' strokeLinejoin='round' />
			</StyledSvg>
		</Button>
	</a>
);

export default Externe;
