import { firebaseDb } from '../core/firebase'
//import request from 'request'

export function fetchItems(dispatch){
    firebaseDb.ref('items').limitToLast(12).on('value', setItem.bind(this, "add"))
    firebaseDb.ref('items').limitToLast(12).on('child_changed', setItem.bind(this, "update"))

    function setItem(mode, data){
        let type = ""
        if(mode === "add"){
            type = "LOAD_ITEM_SUCCESS"
        }else if(mode === "update"){
            type = "UPDATE_ITEM_SUCCESS"
        }
        console.log('set item', type, data.val())
        return new Promise((resolve, reject) => {
            dispatch(dispatchItem(type, data.val()))
            resolve()
        })
    }

    function dispatchItem(type, loadedItem, key){
        return {
            type,
            payload: loadedItem
        }
    }
}
/*
export function createItem(text) {
    return {
        type: "SOCKET_CREATE_ITEM",
        text
    }

    window.fetch(text,{
        mode: "no-cors"
    })
    .then(function(response) {
        console.log('res', response)
        return response.text()
    })
    .then(function(body) {
        console.log('body', body)
    })

  return dispatch => {
    firebaseDb.ref('items').push({
        text,
        timestamp: new Date().toString(),
        usersWhoLiked: {
            init: true
        }
    })
    .then(item => dispatch(createTaskSuccess(item)))
    .catch(error => dispatch(createTaskError(error)))
  }

  function createTaskError(error) {
    return {
      type: "CREATE_ITEM_ERROR",
      payload: error
    };
  }

  function createTaskSuccess(task) {
    return {
      type: "CREATE_ITEM_SUCCESS",
      payload: task
    };
}

}
*/
export function updateItem(key, value) {
  return dispatch => {
      firebaseDb.ref("items/"+key)
      .update({text: value}, error => error ? dispatch(updateItemError(error)) : dispatch(updateItemSuccess()));
  }

  function updateItemError(error){
      return {
          type: "UPDATE_ITEM_ERROR",
          payload: error
      }
  }

  function updateItemSuccess(result){
      return {
          type: "UPDATE_ITEM_SUCCESS",
          payload: result
      }
  }
}

export function deleteItem(key) {
  return dispatch => {
    firebaseDb.ref("items/"+key)
      .remove()
      .then(() => dispatch(deleteItemSucess(key))) // this also should deletes likedArticle saved in user
      .catch(error => dispatch(deleteItemError(error)));
  };

  function deleteItemSucess(key){
      return {
          type: "DELETE_ITEM_SUCCESS",
          payload: key
      }
  }

  function deleteItemError(error) {
    return {
      type: "DELETE_ITEM_ERROR",
      payload: error
    };
  }
}

export function likeArticle(userId, articleId){
    // like
    return dispatch => {
        let article
        firebaseDb.ref("items/"+articleId).on('value', snapshot => {
            article = snapshot.val()
        })
        firebaseDb.ref("items/"+articleId).off()
        console.log("users/"+userId+"/likedArticle/"+articleId, article)
        firebaseDb.ref("users/"+userId+"/likedArticle/"+articleId).set({
            title: article.title,
            timestamp: article.timestamp,
            usersWhoLiked: article.usersWhoLiked
        }, error => {
            if(error){
                return dispatch(likeArticleError(error))
            }

            firebaseDb.ref("items/" + articleId + "/usersWhoLiked/" + userId).set({
                liked: true
            })
            return dispatch(likeArticleSuccess(articleId))
        })
    }

    function likeArticleError(result){
        return {
            type: "LIKE_ARTICLE_ERROR",
            payload: result
        }
    }

    function likeArticleSuccess(result){
        return {
            type: "LIKE_ARTICLE_SUCCESS",
            payload: result
        }
    }
}

export function unlikeArticle(userId, articleId){

    // unlike
    console.log('userId', userId)
    return dispatch => {
        firebaseDb.ref("users/"+userId+"/likedArticle/"+articleId)
        .remove()
        .then(() => {
            // success
            firebaseDb.ref("items/" + articleId + "/usersWhoLiked/"+userId)
            .remove()

            return dispatch(unlikeArticleSuccess(articleId))
        })
        .catch(error => dispatch(unlikeArticleError(error)))
    }

    function unlikeArticleError(result){
        return {
            type: "UNLIKE_ARTICLE_ERROR",
            payload: result
        }
    }

    function unlikeArticleSuccess(result){
        return {
            type: "UNLIKE_ARTICLE_SUCCESS",
            payload: result
        }
    }
}
