const profile = (state = [], action) => {
    //console.log(action)
    switch (action.type){
        case "LOAD_USER_SUCCESS":
            let likedArticles = []
            if(action.payload.likedArticle){
                likedArticles = Object.keys(action.payload.likedArticle).map(key => {
                    let el = action.payload.likedArticle[key]
                    return {
                        id: key,
                        title: el.title,
                        timestamp: el.timestamp,
                        usersWhoLiked: el.usersWhoLiked
                    }
                })
            }
            return [
                {
                    id: action.id,
                    name: action.payload.username,
                    likedArticles: likedArticles,
                    photoURL: action.payload.profile_picture,
                    email: action.payload.email
                }
            ]
        default:
            return state
    }
}

export default profile
