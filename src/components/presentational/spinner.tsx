import React from "react";

interface Props {
    small?: boolean;
}

const Spinner = ({small}: Props) => (
    <div className={`spinner ${small ? 'small' : ''}`}>
        <div/>
        <div/>
        <div/>
        <div/>
    </div>
);

export default Spinner;