import axios from 'axios';
import {actionGalleryRes} from "./actionGallery";
import {actionLoadingSet} from "../loading/actionLoading";

export const thunkActionGalleryRequest = (isPage) => (dispatch, getState) => {
    const {filter} = getState();

    axios.post('http://localhost:8000/gallery', {...filter}, {
        headers: {
            'content-type': 'application/json'
        },
    }).then((response) => {
        const data = response.data.data
        dispatch(actionGalleryRes(data, !!isPage));
        dispatch(actionLoadingSet(false));
    }).catch(error => {
        console.log(error)
    })
}