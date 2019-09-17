import {FILTER_CHANGE} from "./actionFilter";

const initialFilter = {
    section: "hot",
    sort: "viral",
    page: 1,
    window: "day",
    showViral: true
}

export default (state = initialFilter, action) => {
    switch(action.type) {
        case FILTER_CHANGE:
            return {
                ...state,
                ...action.filterObj
            }
        default:
            return state;

    }
}