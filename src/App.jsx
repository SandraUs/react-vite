import { createElement } from 'react';
import ReactLogo from './assets/react.svg?react';

export const App = () => {
  const currentYear = new Date().getFullYear();

  return createElement(
    'div',
    null,
    createElement('h1', null, 'Hello'),
    createElement(ReactLogo, null),
    // Декларативный стиль
    createElement('p', null, `${currentYear}`)
    // Императивного стиля здесь пока нет
  );
};
