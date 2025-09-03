import ReactLogo from './assets/react.svg?react';

export const App = () => {
	const currentYear = new Date().getFullYear();

	return (
		<div>
			<h1>Hello</h1>
			<ReactLogo />
			 {/* Декларативный стиль(что должно быть показано) */}
			<p>{currentYear}</p>
		</div>
	);
};
{/*Императивный стиль тут отсутствует*/}
