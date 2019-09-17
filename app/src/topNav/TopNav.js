import React from "react";
import { connect } from "react-redux";
import {GCheckbox} from "../generic/checkbox/Checkbox";
import {GRadioBtn} from "../generic/radio/RadioBtn";
import {GSelect} from "../generic/select/Select";
import {actionUpdateFilter} from "./actionFilter";
import "./topNav.scss";


class TopNavDOM extends React.PureComponent {
    render () {
        const {section, sort, window, showViral} = this.props.filter;

        const sortOptions = [
            {value: "viral", label: "Viral"}, 
            {value: "top", label: "Top"}, 
            {value: "time", label: "Time"}, 
            {value: "rising", label: "Rising"}
        ];
        const selectedSort = sortOptions.find((item) => item.value === sort);

        const windowOptions = [
            {value: "day", label: "Day"}, 
            {value: "week", label: "Week"}, 
            {value: "month", label: "Month"}, 
            {value: "year", label: "Year"},
            {value: "all", label: "All"},
        ];
        const selectedWindow = windowOptions.find((item) => item.value === window);

        return (
            <div className="topNav" id="topNav">
                <div className={"options"}>
                    <GCheckbox config={{
                        checked: showViral,
                        label: "Viral",
                        styles: {},
                        onChange: this.handleViralChange
                    }}/>
                    <div className="section">
                        <GRadioBtn config={[
                            {checked: section === "hot", label: "Hot", styles: {marginLeft: "15px"}, value: "hot"},
                            {checked: section === "top", label: "Top", styles: {marginLeft: "15px"}, value: "top"},
                            {checked: section === "user", label: "User", styles: {marginLeft: "15px"}, value: "user"},
                        ]}/>
                    </div>
                </div>
                <div className="moreOptions">
                    <div className="sort">
                        <label>Sort </label>
                        <GSelect options={sortOptions} activeOption={selectedSort}/>
                    </div>
                    <div className="window">
                        <label>Window </label>
                        <GSelect options={windowOptions} activeOption={selectedWindow}/>
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

    handleViralChange = (status) => {
        this.props.onFilterChange({showViral: status});
    }
}

const mapState = (state) => ({
    filter: state.filter
})

const mapDispatch = (dispatch) => ({
    onFilterChange: (filterObj) => dispatch(actionUpdateFilter(filterObj))
});

export const TopNav = connect(mapState, mapDispatch)(TopNavDOM)