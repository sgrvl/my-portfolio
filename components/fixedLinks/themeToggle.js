import styled from 'styled-components';
import Button from './Button';

const StyledSvg = styled.svg`
	stroke: ${(props) => props.theme.darkshades};
`;

const ThemeToggle = ({ theme, setTheme }) => (
	<Button onClick={() => setTheme(!theme)}>
		{theme ? (
			<StyledSvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M20.9999 12.79C20.8426 14.4922 20.2038 16.1144 19.1581 17.4668C18.1125 18.8192 16.7034 19.8458 15.0956 20.4265C13.4878 21.0073 11.7479 21.1181 10.0794 20.7461C8.41092 20.3741 6.8829 19.5345 5.67413 18.3258C4.46536 17.117 3.62584 15.589 3.25381 13.9205C2.88178 12.252 2.99262 10.5121 3.57336 8.9043C4.15411 7.29651 5.18073 5.88737 6.53311 4.84175C7.8855 3.79614 9.5077 3.15731 11.2099 3C10.2133 4.34827 9.73375 6.00945 9.85843 7.68141C9.98312 9.35338 10.7038 10.9251 11.8893 12.1106C13.0748 13.2961 14.6465 14.0168 16.3185 14.1415C17.9905 14.2662 19.6516 13.7866 20.9999 12.79Z'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</StyledSvg>
		) : (
			<StyledSvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path d='M12 1V3' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
				<path d='M12 21V23' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
				<path d='M4.22 4.22021L5.64 5.64021' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
				<path d='M18.36 18.3599L19.78 19.7799' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
				<path d='M1 12H3' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
				<path d='M21 12H23' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
				<path d='M4.22 19.7799L5.64 18.3599' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
				<path d='M18.36 5.64021L19.78 4.22021' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
			</StyledSvg>
		)}
	</Button>
);

export default ThemeToggle;
