import React  from 'react';
import marked from 'marked';

import article_links       from '../markdown/links';
import article_about       from '../markdown/about';
import article_development from '../markdown/development';
import article_research    from '../markdown/research';


class MarkdownPreview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: article_links,
        };
    }
    render() {
        let rawHtml = marked(this.state.text)
        return (
            <div className="editorBox">
                <span dangerouslySetInnerHTML={{__html: rawHtml}} />
            </div>
        );
    }
};

React.render(
    <MarkdownPreview />,
    document.getElementById('content')
);

