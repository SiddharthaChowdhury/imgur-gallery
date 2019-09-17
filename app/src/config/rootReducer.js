import { combineReducers } from "redux";
import reducerGallery from "../gallery/reducerGallery";
import reducerFilter from "../topNav/reducerFilter";
import reducerLoading from "../loading/reducerLoading";

export default combineReducers({
    gallery: reducerGallery,
    filter : reducerFilter,
    loading: reducerLoading
});