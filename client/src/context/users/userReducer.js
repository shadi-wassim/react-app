import {
    SET_CURRENT,
    CLEAR_CURRENT,
} from '../types';

const variable = (state, action) => {
    switch(action.type) {
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            }
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            }
        default:
            return state;
    }
}

export default variable;

