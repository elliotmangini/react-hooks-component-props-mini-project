import React from 'react';
import Article from './Article';

function ArticleList({ posts }) {

    const postEls = posts.map( post => {
        return (
            <Article key={posts.id} title={post.title} date={post.date} preview={post.preview}/>
        )
    }) 

    return (
        <main>
            {postEls}
        </main>
    )
}

export default ArticleList;