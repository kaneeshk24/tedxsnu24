import React from "react";
import "./BlurredSpinner.scss";
import Spinner from "./Spinner/Spinner";

export default function BlurredSpinner({ style }) {
    return (
        <div className="BlurredSpinnerWrapper" style={style}>
            <div className="BlurredSpinnerWrapper__container">
                <Spinner />
            </div>
        </div>
    );
}