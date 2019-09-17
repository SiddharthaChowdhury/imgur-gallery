import React from 'react';
import { connect } from "react-redux";
import { thunkActionGalleryRequest } from "./thunkGallery";
import { actionGallerySetIndex } from "./actionGallery";
import Grid from '@material-ui/core/Grid';
import {Modal} from "../modal/Modal";

import "./gallery.scss";

class GalleryDOM extends React.PureComponent {
    componentDidMount () {
        const {onFetchGallery} = this.props;
        onFetchGallery();
    }

    render () {
        const {images} = this.props;

        if (!images) {
            return null;
        }

        const {col1, col2, col3, col4} = this.getCols()

        return (
            <>
                <Grid item className="gallery">
                    <Grid item className={"gallery-container"}>
                        <Grid item xs={6} sm={6} md={3} lg={3} className="gallery-cols">
                            {col1 && col1.map(this.getImageComponent)}
                        </Grid>
                        <Grid item xs={6} sm={6} md={3} lg={3} className="gallery-cols">
                            {col2 && col2.map(this.getImageComponent)}
                        </Grid>
                        <Grid item xs={6} sm={6} md={3} lg={3} className="gallery-cols">
                            {col3 && col3.map(this.getImageComponent)}
                        </Grid>
                        <Grid item xs={6} sm={6} md={3} lg={3} className="gallery-cols">
                            {col4 && col4.map(this.getImageComponent)}
                        </Grid>
                    </Grid>
                </Grid>
                <Modal/>
            </>
        );
    }

    getCols = () => {
        const {images} = this.props;
        const imageArr = images ? [...images] : []

        const cols = {
            col1: null,
            col2: null,
            col3: null,
            col4: null
        }
        if(imageArr.length > 4) {
            const each = Math.floor(imageArr.length / 4);

            cols.col1 = imageArr.splice(0, each)
            cols.col2 = imageArr.splice(0, each);
            cols.col3 = imageArr.splice(0, each);
            cols.col4 = imageArr.splice(0, each);

            if(imageArr.length > 0) {
                cols.col1 = [
                    ...cols.col1,
                    ...imageArr
                ]
            }

        } else {
            cols.col1 = imageArr || [];
        }

        return cols;
    }

    getImageComponent = ({link, height, width, title, index}, key) => {
        const {onImageSelect} = this.props
        const paddingTop = (height / width * 100)+"%";

        return (
            <div key={key} className={"image-container"} onClick={() => onImageSelect(index)}>
                <div className="label-title">{title}</div>
                <div style={{
                    paddingTop, 
                    width: "100%", 
                    backgroundImage: "url('"+link+"')", 
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    height: 0,
                    borderRadius: '10px',
                    backgroundColor: '#FAFAFA'
                }}></div>
            </div>
        )
    }
}

const mapState = (state) => ({
    images: state.gallery.data,
    filter: state.filter
})
const mapDispatch = (dispatch) => ({
    onFetchGallery: () => dispatch(thunkActionGalleryRequest()),
    onImageSelect: (index) => dispatch(actionGallerySetIndex(index))
})

export const Gallery = connect(mapState, mapDispatch)(GalleryDOM)