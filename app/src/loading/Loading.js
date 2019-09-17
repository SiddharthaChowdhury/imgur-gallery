import React from "react";
import {connect} from "react-redux";
import "./loading.scss";
import { utilDocument } from "../utils/utilDocument";

class LoadingDOM extends React.Component {
    render () {

        console.log("this.props.isLoading", this.props.isLoading)

        if(!this.props.isLoading) {
            utilDocument.enableBodyScroll()
            return null;
        }

        utilDocument.disableBodyScroll()
        return (
            <div className={"modalLoading"}>
                <div className="modal-content">
                    <h3>Loading please wait ..</h3>
                </div>
            </div>
        );
    }
}

const mapState = (state) => ({
    isLoading: state.loading
})

export const Loading = connect(mapState, null)(LoadingDOM)