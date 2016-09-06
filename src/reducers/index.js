import { combineReducers } from 'redux'
import items from './items'
import auth from './auth'
import profile from './profile'
import crawler from './crawler'
import navUI from './navUI'

const totalReducer = combineReducers({
    items,
    auth,
    profile,
    crawler,
    navUI
})

export default totalReducer
