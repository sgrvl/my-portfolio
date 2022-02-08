import styled from 'styled-components';

const Menu = styled.div`
	position: fixed;
	top: 0;
	right: -350px;
	z-index: 100;
	width: 350px;
	height: 100%;
	max-width: 100%;
	transition: right ease 0.6s;
	background-color: ${(props) => props.theme.lightshades};
	box-shadow: -0.7px 0px 1.7px rgba(0, 0, 0, 0.009), -1.7px 0px 4.3px rgba(0, 0, 0, 0.013),
		-3.5px 0px 8.9px rgba(0, 0, 0, 0.017), -7.3px 0px 18.3px rgba(0, 0, 0, 0.021),
		-20px 0px 50px rgba(0, 0, 0, 0.03);

	${(props) =>
		props.open &&
		`
        right: 0;
    `}

	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 10em 2em 0 2em;
	gap: 3em;

	.activeLink {
		color: ${(props) => props.theme.main};
	}
`;

const BigWrap = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	right: -100vw;
	z-index: 80;

	${(props) =>
		props.open &&
		`
		left: 0;
	`}
`;

const NavMenu = ({ children, open, handleOpen }) => (
	<BigWrap open={open} onClick={handleOpen}>
		<Menu open={open}>{children}</Menu>
	</BigWrap>
);

export default NavMenu;
