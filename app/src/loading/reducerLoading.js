import {LOADING_STATE} from "./actionLoading";

const initialLoading = true;

export default (state = initialLoading, action) => {
    switch(action.type) {
        case LOADING_STATE:
            return action.status
        default: 
            return state;
    }
}