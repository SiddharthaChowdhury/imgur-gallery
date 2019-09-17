import { TYPE_GALLERY_RESPONSE, TYPE_GALLERY_IMAGE_SELECT } from "./actionGallery";

const initialState = {
    data: null,
    activeIndex: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case TYPE_GALLERY_RESPONSE:
            return reducerGalleryResp(state, action)
        
        case TYPE_GALLERY_IMAGE_SELECT:
            return {
                ...state,
                activeIndex: action.indexValue
            }

        default:
            return state;

    }
}

const reducerGalleryResp = (state, action) => {
    if(state.data) {
        let currentIndex = state.data.length;
        const newLot = action.data.map((imgObj) => ({
            ...imgObj,
            index: currentIndex++
        }))
        return {
            ...state,
            data: [
                ...state.data,
                ...newLot
            ]
        }
    }

    let currentIndex = 0;
    const newLot = action.data.map((imgObj) => ({
        ...imgObj,
        index: currentIndex++
    }))

    return {
        ...state,
        data: newLot
    }
}