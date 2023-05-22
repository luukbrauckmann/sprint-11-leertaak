import { library, dom, icon } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

export const fontawesome = (server) => {
	library.add(fas)
	server.locals.fas = () => dom.css()
	server.locals.icon = (iconName) => icon({ prefix: 'fas', iconName }).html
}