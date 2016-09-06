import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import io from 'socket.io-client'
import {createStore, applyMiddleware, compose } from 'redux'
import remoteActionMiddleWare from './remote_action_middleware'
import thunk from 'redux-thunk'

import totalReducer from './reducers'
import App from './components/App';
import './index.css';

import {initAuth, itemActions, profileActions} from './actions/'
const socket = io(`${location.protocol}//${location.hostname}:6567`);

let middleware = [
    thunk
    ,remoteActionMiddleWare(socket)
]

const devToolsExtension = window.devToolsExtension
const initialState = {}
var store

if(typeof devToolsExtension === 'function') {
  store = createStore(
      totalReducer,
      initialState,
      compose(applyMiddleware(...middleware), devToolsExtension())
    );
}else{
    store = createStore(
        totalReducer,
        initialState,
        applyMiddleware(...middleware)
    );
}

/*
let createStoreWithMiddleware = applyMiddleware(
    remoteActionMiddleWare(socket)
)(createStore)

let store = createStoreWithMiddleware(
    totalReducer,
    initialState,
    window.devToolsExtension && window.devToolsExtension()
)
*/

console.log('store',store.getState())

store.subscribe(()=>{
    console.log('new client state', store.getState())
    //io.emit('state', store.getState())
})

socket.on('state', state => {
    // getting from server io
      //store.dispatch({type: 'SET_STATE', state})
    //  store.dispatch({type: 'ADD_ITEM', state})
}
);

socket.on('crawler_result', result => {
    console.log('crawler_result', result)
    store.dispatch({
        type: "CRAWLED_ITEM_TEMP_STORE",
        payload: result
    })
    //crawlerActions.saveCrawledItem(store.dispatch, result)
    /*
    store.dispatch({
        type:"CRAWL_ITEM_SUCCESS",
        payload: result
    })
    */
})

function render(){
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
      document.getElementById('root')
    )
}

initAuth(store.dispatch)
  .then(() => itemActions.fetchItems(store.dispatch))
  .then(() => profileActions.fetchUserProfile(store.dispatch, store.getState().auth))
  .then(() => render())
  .catch(error => console.error(error)); // eslint-disable-line no-console
