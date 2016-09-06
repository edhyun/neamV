import { firebaseAuth } from '../core/firebase'
import * as authActions from './auth'
import * as itemActions from './items'
import * as profileActions from './profile'
import * as crawlerActions from './crawler'
import * as navUIActions from './navUI'

let counter = 3

export const testAction = (text) => {
    console.log('action called', text)
    return {
        type: 'ADD_ITEM',
        id: counter++,
        text
    }
}

export { authActions }
export { itemActions }

export function initAuth(dispatch) {
  return new Promise((resolve, reject) => {
    const unsub = firebaseAuth.onAuthStateChanged(
      user => {
        dispatch(authActions.initAuth(user));
        unsub();
        resolve();
      },
      error => reject(error)
    );
  });
}

export { profileActions }
export { crawlerActions }
export { navUIActions }
