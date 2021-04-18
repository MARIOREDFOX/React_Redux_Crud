import {
    FETCH_TASKS
} from '../actions/types';

export const reducer = (state = {}, action) => {

    switch (action.type) {
        case FETCH_TASKS:
            return { ...state, homePageTasks: action.payload}
        default:
            return state;
    }
};
