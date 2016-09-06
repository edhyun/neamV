import React from 'react'

const Profile = ({userName, userImage, likedArticles}) => (
    <div className="container">
        <div className="profile">
            <div className="row">
                <div className="col-sm-4">
                    {userName}
                    <br />
                    <img alt="profile" src={userImage}></img>
                </div>
                <div className="col-sm-8">
                    <ul>
                        <strong>likedArticles:</strong>
                        {likedArticles.map(article =>
                            <li key={article.id}>{article.title}</li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    </div>
)

export default Profile
