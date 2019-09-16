import React from "react";
import { connect } from "react-redux";
import { actionGallerySetIndex } from "../gallery/actionGallery";
import { ArrowUpward, ArrowDownward } from '@material-ui/icons';
import "./modal.scss";

class ModalDOM extends React.Component {
    render () {
        const {gallery: {data, activeIndex}, onClose} = this.props;

        if(activeIndex === null) {
            return null;
        }

        const {title, link, ups, downs, score} = data[activeIndex];
        const imgStyle = {maxHeight: (window.innerHeight - 150)+'px'}

        return (
            <div className={"modal"}>
                <div className="modal-content">
                    <div className="image-container">
                        <div className="title">{title}</div>
                        <img alt="Loading..." src={link} className="image" style={imgStyle}/>
                        <div className="footer">
                            <div className="stats">
                                <div className="ud">
                                    <div>{ups}</div>
                                    <ArrowUpward/>
                                </div>
                                <div className="ud">
                                    <div>{downs}</div>
                                    <ArrowDownward/>
                                </div>
                                <div className="ud">
                                    <div>{score}</div>
                                    <div> &nbsp;Points</div>
                                </div>
                            </div>
                            <button className="close" onClick={onClose}>Close</button>
                        </div>
                    </div>
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