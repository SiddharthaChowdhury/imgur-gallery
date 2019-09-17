import axios from 'axios';
import { actionGalleryRes } from "./actionGallery";

export const thunkActionGalleryRequest = () => (dispatch, getState) => {

    const {filter} = getState();
    console.log("with filter ", filter)

    axios.post('http://localhost:8000/gallery', {...filter}, {
        headers: {
            'content-type': 'application/json'
        },
    }).then((response) => {
        const data = response.data.data
        dispatch(actionGalleryRes(data))
    }).catch(error => {
        console.log(error)
    })
}