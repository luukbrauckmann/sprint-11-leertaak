import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';

export const highlightjs = (server) => {
	hljs.registerLanguage('xml', xml)
	server.locals.highlight = (code) => hljs.highlight(code, { language: 'xml' }).value
}