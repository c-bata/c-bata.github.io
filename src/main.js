import marked from 'marked';

import article_links       from '../markdown/links';
import article_about       from '../markdown/about';
import article_development from '../markdown/development';
import article_research    from '../markdown/research';

let content_area       = document.getElementById('content');

let buttons = {
  LINKS:    document.getElementById('links'),
  ABOUT:    document.getElementById('about'),
  DEVELOP:  document.getElementById('development'),
  RESEARCH: document.getElementById('research')
};

buttons.LINKS.addEventListener("click", () => {
    content_area.innerHTML = marked(article_links);
});

buttons.ABOUT.addEventListener("click", () => {
    content_area.innerHTML = marked(article_about);
});

buttons.DEVELOP.addEventListener("click", () => {
    content_area.innerHTML = marked(article_development);
});

buttons.RESEARCH.addEventListener("click", () => {
    content_area.innerHTML = marked(article_research);
});

content_area.innerHTML = marked(article_links);

