const items = (state = [], action) => {
    //console.log(action)
    switch (action.type){
        case "LOAD_ITEM_SUCCESS":
        if(!action.payload){
            return []
        }
        return Object.keys(action.payload).map(key => {
            let item = action.payload[key]
            return Object.assign({}, {
                id:key,
                title:item.jsonRes.title,
                timestamp: item.timestamp,
                site_title: item.jsonRes.site_title,
                image: item.jsonRes.image,
                description: item.jsonRes.description,
                url: item.jsonRes.url,
                alchemy_concepts: item.alchemy_result.concepts.results,
                alchemy_keywords: item.alchemy_result.keywords.results,
                usersWhoLiked: [],
                userInput: item.userInput,
                author: item.author
            })
        })
        case "UPDATE_ITEM_SUCCESS":
            return state
            /*
            return [
                ...state.map(item => {
                    if(item.id === action.id){
                        return Object.assign({}, {
                            id: action.id,
                            name: action.payload.text,
                            usersWhoLiked: action.payload.usersWhoLiked
                        })
                    }
                    return item
                })
            ]
            */
        case "DELETE_ITEM_SUCCESS":
            return state.filter((item)=> item.id !== action.payload )
        case "DELETE_ITEM_ERROR":
            return state
        case "LIKE_ARTICLE_SUCCESS":
            return state
        case "LIKE_ARTICLE_ERROR":
            return state
        case "UNLIKE_ARTICLE_SUCCESS":
            return state
        case "UNLIKE_ARTICLE_ERROR":
            return state
        default:
            return state
    }
}

export default items
