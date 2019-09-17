import React from 'react';
import { connect } from "react-redux";
import { thunkActionGalleryRequest } from "./thunkGallery";
import { actionGallerySetIndex } from "./actionGallery";
import { actionUpdateFilter } from "../topNav/actionFilter";
import { actionLoadingSet } from "../loading/actionLoading";
import { utilDocument } from "../utils/utilDocument";
import Grid from '@material-ui/core/Grid';

import "./gallery.scss";

class GalleryDOM extends React.PureComponent {
    componentDidMount () {
        const {onFetchGallery, isLoading} = this.props;
        onFetchGallery();

        const self = this;
        window.addEventListener('scroll', () => {
            const {filter: {page}, onFilterChange, onStartLoading} = self.props;
            const scrollPercent = self.getScrollPercent();

            console.log("scroll", self.getScrollPercent())

            if (!isLoading, scrollPercent > 60) {
                let nextPage = page + 1;
                onFilterChange({page: nextPage});
                onStartLoading();
                onFetchGallery(true)
            }
        })
    }

    getScrollPercent = () => {
        const h = document.documentElement;
        const b = document.body;

        return (h['scrollTop']||b['scrollTop']) / ((h['scrollHeight']||b['scrollHeight']) - h.clientHeight) * 100;
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
        const paddingTop = (height / width * 100)+"%";

        return (
            <div key={key} className={"image-container"} onClick={() => this.handleImageClick(index)}>
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

    handleImageClick = (index) => {
        const {onImageSelect} = this.props
        onImageSelect(index)

        utilDocument.disableBodyScroll()
    }
}

const mapState = (state) => ({
    images: state.gallery.data,
    filter: state.filter,
    isLoading: state.loading,
})
const mapDispatch = (dispatch) => ({
    onFetchGallery: (isPage) => dispatch(thunkActionGalleryRequest(isPage)),
    onImageSelect: (index) => dispatch(actionGallerySetIndex(index)),
    onFilterChange: (filterObj) => dispatch(actionUpdateFilter(filterObj)),
    onStartLoading: () => dispatch(actionLoadingSet(true)),
})

export const Gallery = connect(mapState, mapDispatch)(GalleryDOM)