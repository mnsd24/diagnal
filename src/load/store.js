import { createStore } from 'redux';

import {GET_DATA1,GET_DATA2,GET_DATA3} from './constants'

const initailState = {
    page1: {},
    page2: {},
    page3: {},
}
const rootReducer = (state = initailState, action) => {
    switch (action.type) {
        case GET_DATA1:
            return {
                ...state,
                page1: action.page1,
            }
        case GET_DATA2:
            return {
                ...state,
                page2: action.page2,
            }
        case GET_DATA3:
            return {
                ...state,
                page3: action.page3,
            }
        default:
            return state;
    }
}

export default createStore(rootReducer)