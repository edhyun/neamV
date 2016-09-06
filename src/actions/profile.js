import { firebaseDb } from '../core/firebase'

export function fetchUserProfile(dispatch, auth){
    if(auth.authenticated){
        let userId = auth.id

        firebaseDb.ref('users/' + userId).on('value', snapshot => {

            let dispatchUser = (payload, id) => {
                return {
                    type: "LOAD_USER_SUCCESS",
                    payload,
                    id
                }
            }

            return new Promise((resolve, reject) => {
                dispatch(dispatchUser(snapshot.val(), userId))
                resolve()
            })
        })
    }else{
        return new Promise((resolve, reject) => {
            console.log('not log in, resolving')
            resolve()
        })
    }
}
