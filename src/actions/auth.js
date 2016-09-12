import firebase from 'firebase'
import { firebaseAuth } from '../core/firebase'
import { fetchUserProfile } from './profile'

export function signInWithGoogle() {
  return authenticate(new firebase.auth.GoogleAuthProvider())
}

export function signInWithFacebook(){
    return authenticate(new firebase.auth.FacebookAuthProvider())
}

function authenticate(provider) {
  return dispatch => {
    firebaseAuth.signInWithPopup(provider)
      .then(result => dispatch(signInSuccess(result)))
      .then(result => fetchUserProfile(dispatch, result.payload)) // load init profile from firebase      
      .catch(error => dispatch(signInError(error)));
  };

  function signInError(error) {
    return {
      type: "SIGN_IN_ERROR",
      payload: error
    };
  }

  function signInSuccess(result) {
    return {
      type: "SIGN_IN_SUCCESS",
      payload: {
          authenticated: !!result.user,
          id: result.user ? result.user.uid : null,
          userName: result.user.displayName,
          userImage: result.user.photoURL
      }
    };
  }
}

export function initAuth(user) {
  return {
    type: "INIT_AUTH",
    payload: user
  };
}

export function signOut() {
  return dispatch => {
    firebaseAuth.signOut()
      .then(() => dispatch(signOutSuccess()));
  };

  function signOutSuccess() {
    return {
      type: "SIGN_OUT_SUCCESS"
    };
  }
}
