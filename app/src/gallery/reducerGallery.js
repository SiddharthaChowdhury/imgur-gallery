import { TYPE_GALLERY_RESPONSE } from "./actionGallery";

const initialState = {
    data: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case TYPE_GALLERY_RESPONSE:
            if(state.data) {
                return {
                    ...state,
                    data: [
                        ...state.data,
                        ...action.data
                    ]
                }
            } 

            return {
                ...state,
                data: action.data
            }
        
        default:
            return state;

    }
}