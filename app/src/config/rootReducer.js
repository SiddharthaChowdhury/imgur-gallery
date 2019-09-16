import { combineReducers } from "redux";
import reducerGallery from "../gallery/reducerGallery";

export default combineReducers({
    gallery: reducerGallery
});