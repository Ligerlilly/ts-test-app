import { combineReducers } from 'redux'
import { INITIAL_STATE, updateGreeting } from '../core'
import { routerReducer } from 'react-router-redux'

type HelloAction = {
    type: "SET_GREETING",
    greeting: string,
}

// just for hello world
function hello(state = INITIAL_STATE.hello, action: HelloAction) {
    switch(action.type) {
        case 'SET_GREETING':
            return updateGreeting(action.greeting)
        default:
            return state
    }
}

const rootReducer = combineReducers({
    hello,
    routing: routerReducer,
})

export default rootReducer