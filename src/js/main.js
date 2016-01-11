import marked from 'marked';
import d3     from 'd3';

import article_about    from '../../contents/about';
import article_develop  from '../../contents/development';
import article_works    from '../../contents/works';

let pages = [
    { content: marked(article_about),   buttonId: 'about'},
    { content: marked(article_works),   buttonId: 'works'},
    { content: marked(article_develop), buttonId: 'development'}
];

// contents
let content_area = d3.select("#content");

pages.map((page) => {
    let button = document.getElementById(page.buttonId);
    button.addEventListener("click", () => {
        content_area.html(page.content);
    });
});

content_area.html(pages[0].content);
