import React from "react";
import { connect } from "react-redux";
import {GCheckbox} from "../generic/checkbox/Checkbox";
import {GRadioBtn} from "../generic/radio/RadioBtn";
import "./topNav.scss";


class TopNavDOM extends React.PureComponent {
    render () {
        return (
            <div className="topNav" id="topNav">
                <div className={"options"}>
                    <GCheckbox checked={true} label="Show viral"/>
                    <div className="section">
                        <GRadioBtn config={[
                            {checked: true, label: "Hot", styles: {marginLeft: "15px"}},
                            {checked: false, label: "Top", styles: {marginLeft: "15px"}},
                            {checked: false, label: "User", styles: {marginLeft: "15px"}},
                        ]}/>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        let prevScrollpos = window.pageYOffset;
        const topNav = document.getElementById("topNav");

        if (topNav) {
            window.onscroll = function() {
                const currentScrollPos = window.pageYOffset;
                if (prevScrollpos > currentScrollPos) {
                    document.getElementById("topNav").style.top = "0";
                } else {
                    document.getElementById("topNav").style.top = "-50px";
                }
                prevScrollpos = currentScrollPos;
            }
        }
    }

    componentWillUnmount() {

    }
}

export const TopNav = connect(null, null)(TopNavDOM)