import React from 'react';
import { connect } from "react-redux";
import { thunkActionGalleryRequest } from "./thunkGallery";
import Grid from '@material-ui/core/Grid';
import "./gallery.scss";

class GalleryDOM extends React.PureComponent {
    componentDidMount () {
        const {onFetchGallery} = this.props;
        onFetchGallery();
    }

    render () {
        const {images} = this.props;

        if (!images) {
            return (<div>Please wait...</div>)
        }

        const {col1, col2, col3, col4} = this.getCols()

        return (
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
        );
    }

    getCols = () => {
        const {images} = this.props;

        const cols = {
            col1: null,
            col2: null,
            col3: null,
            col4: null
        }
        if(images.length > 4) {
            const each = Math.floor(images.length / 4);

            cols.col1 = images.splice(0, each)
            cols.col2 = images.splice(0, each);
            cols.col3 = images.splice(0, each);
            cols.col4 = images.splice(0, each);

            if(images.length > 0) {
                cols.col1 = [
                    ...cols.col1,
                    ...images
                ]
            }

        } else {
            cols.col1 = images || [];
        }

        return cols;
    }

    getImageComponent = ({link, height, width, title}, index) => {
        const paddingTop = (height / width * 100)+"%";
        return (
            <div key={index} className={"image-container"}>
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
    images: state.gallery.data
})
const mapDispatch = (dispatch) => ({
    onFetchGallery: () => dispatch(thunkActionGalleryRequest({}))
})

export const Gallery = connect(mapState, mapDispatch)(GalleryDOM)