import React from 'react'

const Item = ({userId, likedArticles, likeArticle, unlikeArticle, deleteItem, ...item}) => (
    <div className="col-md-4">
        <div className="thumbnail item">
            {item.author &&
                <div className="authorWrapper">
                    <img src={item.author.photoURL} alt="profile_img" className="profile_img pull-left"></img>
                    <span className="profile_name">{ item.author.name }</span>
                    <span className="pull-right">{timeSince(item.timestamp)}</span>
                </div>
            }
            <div className="clearfix"></div>
            <hr />
            {item.image ? <img className="item-image pull-left" alt="thumbnail" src={item.image}></img> : null}
            <a href={item.url}>
                <h4>{ item.title || item.site_title }</h4>
            </a>
            <p className="description">{item.description}</p>
            <div className="clearfix"></div>
            <hr />
            <div className="well">
                {item.userInput}
            </div>
            0 Comments
            <br />
            {
                likedArticles.some(article => article.id === item.id) ?
                <span className="pull-left" onClick={unlikeArticle.bind(this, userId, item.id)}>[Unlike]</span>
                :<span className="pull-left" onClick={likeArticle.bind(this, userId, item.id)}>[Like]</span>
            }
            <span className="pull-right" onClick={deleteItem.bind(this, item.id)}>[Delete]</span>
            <div className="clearfix"></div>
        </div>
    </div>
)

function timeSince(date) {
    var seconds = Math.floor((new Date() - new Date(date)) / 1000);
    var interval = Math.floor(seconds / 31536000);
    if (interval > 1) {
        return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
}

export default Item
