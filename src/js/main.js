import marked from 'marked';
import d3     from 'd3';

import article_links    from '../../markdown/links';
import article_about    from '../../markdown/about';
import article_develop  from '../../markdown/development';
import article_research from '../../markdown/research';

let pages = [
    { content: article_links,    button: document.getElementById('links')       },
    { content: article_about,    button: document.getElementById('about')       },
    { content: article_develop,  button: document.getElementById('development') },
    { content: article_research, button: document.getElementById('research')    }
];

let content_area = d3.select("#content");

pages.map((page) => {
    page.button.addEventListener("click", () => {
        content_area.html(marked(page.content));
    });
});

content_area.html(marked(article_links));

