import { combineReducers } from 'redux'
import { INITIAL_STATE } from '../core'
import { routerReducer } from 'react-router-redux'

type HelloAction = {
    type: ""
}

// just for hello world
function hello(state = INITIAL_STATE.hello, action: HelloAction) {
    switch(action.type) {
        default:
            return state
    }
}

const rootReducer = combineReducers({
    hello,
    routing: routerReducer,
})

export default rootReducer