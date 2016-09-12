const crawler = (state = { loading: false, temp: {} }, action) => {
    //console.log(action)
    switch (action.type){
        case "CRAWLER_START":
            return Object.assign({}, state, {
                loading: true
            })
        case "CRAWLED_ITEM_TEMP_STORE":
            return Object.assign({}, state, {
                temp: action.payload,
                loading: false
            })
        case "SAVE_CRAWLED_ITEM_SUCCESS":
            return Object.assign({}, state, {
                loading: false
            })
        case "SAVE_CRAWLED_ITEM_ERROR":
            return state
        default:
            return state
    }
}

export default crawler
