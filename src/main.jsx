import marked from 'marked';

import article_links       from '../markdown/links';
import article_about       from '../markdown/about';
import article_development from '../markdown/development';
import article_research    from '../markdown/research';

let content_area       = document.getElementById('content');

let button_links       = document.getElementById('links');
let button_about       = document.getElementById('about');
let button_development = document.getElementById('development');
let button_research    = document.getElementById('research');

button_links.addEventListener("click", () => {
    content_area.innerHTML = marked(article_links);
});

button_about.addEventListener("click", () => {
    content_area.innerHTML = marked(article_about);
});

button_development.addEventListener("click", () => {
    content_area.innerHTML = marked(article_development);
});

button_research.addEventListener("click", () => {
    content_area.innerHTML = marked(article_research);
});

content_area.innerHTML = marked(article_links);

