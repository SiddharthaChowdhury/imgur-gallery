import { combineReducers } from "redux";
import reducerGallery from "../gallery/reducerGallery";
import reducerFilter from "../topNav/reducerFilter";

export default combineReducers({
    gallery: reducerGallery,
    filter : reducerFilter
});