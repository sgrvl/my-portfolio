import styled from 'styled-components';
import Mail from './mail';
import Github from './github';
import LinkedIn from './linkedIn';
import ThemeToggle from './themeToggle';

const Wrap = styled.div`
	position: fixed;
	display: flex;
	bottom: 0;

	flex-direction: column;
	align-items: center;
	gap: 1em;

	@media (max-width: 992px) {
		display: none;
	}
`;

const Line = styled.div`
	height: 100px;
	width: 1px;
	background-color: ${(props) => props.theme.darkshades};
`;

const FixedLinks = ({ theme, setTheme }) => (
	<div className='container'>
		<Wrap>
			<ThemeToggle theme={theme} setTheme={setTheme} />
			<Mail />
			<Github />
			<LinkedIn />
			<Line />
		</Wrap>
	</div>
);

export default FixedLinks;
