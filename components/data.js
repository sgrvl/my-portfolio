const data = {
	mdjml: {
		titre: 'Maison des jeunes de Mont-Laurier',
		couverture: {
			src: '/images/mdjml.png',
			alt: "Capture d'écran du site de la maison des jeunes de Mont-Laurier.",
		},
		date: '2021',
		desc: 'Site WordPress pour une organisation à but non-lucratif.',
		texte: 'Site WordPress pour une organisation à but non-lucratif. Ce projet est réalisé dans le cadre du cours de production de médias interactifs au Cégep de Limoilou. Ce travail est mené de A à Z par moi et mon équipe, il est donc plus que simplement une intégration WordPress. Il est cependant encore en production (livraison prévue mai 2022).',
		logos: [
			{ src: '/images/techLogos/wordpress.svg', alt: 'WordPress Logo' },
			{ src: '/images/techLogos/htmlLogo.svg', alt: 'HTML Logo' },
			{ src: '/images/techLogos/css.svg', alt: 'CSS Logo' },
			{ src: '/images/techLogos/bootstrap.svg', alt: 'Bootstrap Logo' },
		],
		github: '',
		externe: '',
	},
	Carrousel: {
		titre: 'Carrousel Anime.js',
		couverture: {
			src: '/images/carrousel.jpg',
			alt: "Capture d'écran d'un carrousel d'images.",
		},
		date: '2021',
		desc: "Carrousel d'images, animé avec Anime.js.",
		texte: "Ce projet a été effectué dans le cadre du cours de production d'interfaces interactives animées du Cégep de Limoilou.<br /><br />Le défi était d'explorer la documentation d'une librairie Javascript inconnue (anime.js dans mon cas) et de réaliser une page web contenant des animations créées à partir de cette dite librairie.<br /><br />Anime.js a été utilisé afin d'animer le masque lors du changement d'image, le texte et la description et finalement le mouvement des images.",
		logos: [
			{ src: '/images/techLogos/javascript.svg', alt: 'JavaScript Logo' },
			{ src: '/images/techLogos/sass.svg', alt: 'Sass Logo' },
			{ src: '/images/techLogos/htmlLogo.svg', alt: 'HTML Logo' },
		],
		github: 'https://github.com/sgrvl/carrousel_animejs',
		externe: 'https://sgrvl-carrousel.netlify.app/',
	},
	'e-commerce': {
		titre: 'E-Commerce',
		couverture: {
			src: '/images/eCommerce.png',
			alt: "Capture d'écran d'un site e-commerce.",
		},
		date: '2021',
		desc: "Interface d'un site e-commerce.",
		texte: "L'interface d'un site de e-commerce réalisé dans le cadre du cours d'interfaces mobiles, programme de production de médias interactifs au Cégep de Limoilou. Le défi était de produire une page 100% responsive avec une approche <q> mobile en premier </q> à l'aide de Bootstrap. Il comporte aussi un panier d'achat fonctionnel (mais sans les paiements) en bonus.",
		logos: [
			{ src: '/images/techLogos/htmlLogo.svg', alt: 'HTML Logo' },
			{ src: '/images/techLogos/javascript.svg', alt: 'JavaScript Logo' },
			{ src: '/images/techLogos/sass.svg', alt: 'Sass Logo' },
			{ src: '/images/techLogos/bootstrap.svg', alt: 'Bootstrap Logo' },
		],
		github: 'https://github.com/sgrvl/AGR_tl-02_gravel-simon',
		externe: 'https://sgrvl.github.io/AGR_tl-02_gravel-simon/',
	},
	ToDo: {
		titre: 'To-do',
		couverture: {
			src: '/images/toDo.jpg',
			alt: "Capture d'écran d'un site to-do.",
		},
		date: '2020',
		desc: 'Petite application de gestion de tâches.',
		texte: "Petite application de gestion de tâches construite avec React. Les tâches sont sauvegardées en localState. J'ai aussi utilisé React-Router afin de pouvoir naviguer avec l'historique dans l'interface. Finalement, les styles sont gérés par Styled-Components et les animations par Framer Motion. Le design de l'application provient de <a  href='https://devchallenges.io/challenges/hH6PbOHBdPm6otzw2De5' target='_blank' rel='noreferrer'>Devchallenges.io</a>.",
		logos: [
			{ src: '/images/techLogos/react.svg', alt: 'React Logo' },
			{ src: '/images/techLogos/styledComponents.svg', alt: 'Style-Components Logo' },
			{ src: '/images/techLogos/framer.svg', alt: 'Framer Motion Logo' },
			{ src: '/images/techLogos/matUI.svg', alt: 'Material UI Logo' },
		],
		github: 'https://github.com/sgrvl/to-do-app',
		externe: 'https://sgrvl-to-do.netlify.app/',
	},
};

export default data;
