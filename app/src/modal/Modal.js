import React from "react";
import { connect } from "react-redux";
import { actionGallerySetIndex } from "../gallery/actionGallery";
import "./modal.scss"

class ModalDOM extends React.Component {
    render () {
        const {gallery: {data, activeIndex}, onClose} = this.props;

        if(activeIndex === null) {
            return null;
        }

        const {title} = data[activeIndex];
        console.log("title", title)

        return (
            <div className={"modal"}>
                <div className="modal-content">
                    <span className="close" onClick={onClose}>&times;</span>
                    <p>Some text in the Modal..</p>
                </div>
            </div>
        );
    }
}

const mapState = (state) => ({
    gallery: state.gallery
})
const mapDispatch = (dispatch) => ({
    onClose: () => dispatch(actionGallerySetIndex(null))
})

export const Modal = connect(mapState, mapDispatch)(ModalDOM)