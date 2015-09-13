import marked from 'marked';
import d3     from 'd3';

import article_links    from '../../markdown/links';
import article_about    from '../../markdown/about';
import article_develop  from '../../markdown/development';
import article_research from '../../markdown/research';

let pages = [
    { content: article_links,    buttonId: 'links',       label: "トップ" },
    { content: article_about,    buttonId: 'about',       label: "自己紹介" },
    { content: article_develop,  buttonId: 'development', label: "スキル" },
    { content: article_research, buttonId: 'research',    label: "研究"   }
];

// sidebar
let pageList = d3.select("#sidebar").append("ul").selectAll("li");
let updatePageList = pageList.data(pages); /* 対応する要素が足りる場合 -> text */
let enterPageList = updatePageList.enter(); /* 対応する要素が足りない場合 -> append */

enterPageList.append("li").html((page) => {
    return `<a href="javascript: void(0)" id="${ page.buttonId }">${ page.label }</a>`;
});

// contents
let content_area = d3.select("#content");

pages.map((page) => {
    let button = document.getElementById(page.buttonId);
    button.addEventListener("click", () => {
        content_area.html(marked(page.content));
    });
});

content_area.html(marked(article_links));
