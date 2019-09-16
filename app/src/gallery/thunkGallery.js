import axios from 'axios';
import { actionGalleryRes } from "./actionGallery";

export const thunkActionGalleryRequest = config => dispatch => {
    axios.post('http://localhost:8000/gallery', {...config}, {
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