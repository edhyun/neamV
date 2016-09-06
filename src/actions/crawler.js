import { firebaseDb } from '../core/firebase'

export function crawlerStart(text){
    // this goes to socket middleware, executing crawler in the server.
    return {
        type: "CRAWLER_START",
        text
    }
}

export function saveItem(result, userInput){
    return dispatch => {
        firebaseDb.ref('items').push({
            title: result.jsonRes.title || "",
            timestamp: new Date().toString(),
            usersWhoLiked: {
                init: true
            },
            contentType: result.contentType,
            jsonRes: result.jsonRes,
            alchemy_result: result.alchemy_result,
            userInput: userInput
        })
        .then(item => dispatch(saveCrawledItemSuccess(item)))
        .catch(error => dispatch(saveCrawledItemError(error)))
    }

    function saveCrawledItemSuccess(item){
        let payload
        item.on('value', snapshot => {
            payload = snapshot.val()
        })
        item.off()
        payload.id = item.key
        //console.log(payload)
        return {
            type: "SAVE_CRAWLED_ITEM_SUCCESS",
            payload
        }
    }

    function saveCrawledItemError(error){
        return {
            type: "SAVE_CRAWLED_ITEM_ERROR",
            payload: error
        }
    }

}
