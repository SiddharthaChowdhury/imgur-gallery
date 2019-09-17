import { TYPE_GALLERY_RESPONSE, TYPE_GALLERY_IMAGE_SELECT } from "./actionGallery";

const initialState = {
    data: null,
    activeIndex: null
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
        
        case TYPE_GALLERY_IMAGE_SELECT:
            return {
                ...state,
                activeIndex: action.indexValue
            }

        default:
            return state;

    }
}