import marked from 'marked';

import article_links    from '../markdown/links';
import article_about    from '../markdown/about';
import article_develop  from '../markdown/development';
import article_research from '../markdown/research';

let content_area       = document.getElementById('content');

let pages = [
    { content: article_links,    button: document.getElementById('links')       },
    { content: article_about,    button: document.getElementById('about')       },
    { content: article_develop,  button: document.getElementById('development') },
    { content: article_research, button: document.getElementById('research')    }
];

pages.map((page) => {
    page.button.addEventListener("click", () => {
        content_area.innerHTML = marked(page.content);
    });
});

content_area.innerHTML = marked(article_links);

