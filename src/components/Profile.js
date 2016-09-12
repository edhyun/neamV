import React from 'react'

const Profile = ({authenticated, userName, userImage, likedArticles}) => (
    <div>
        {
            authenticated ?
            (
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
            ):
            <div className="container">
                <div className="alert alert-info">
                    Please Sign In to see your preference settings.
                </div>
            </div>
        }
    </div>
)

export default Profile
