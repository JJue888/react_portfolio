import React from "react";
import classes from "./WorkDisplay.module.css"

function WorkDisplay({title, image}) {
    return (
        <>
            <div className={classes.container}>
                <img src={image[0]} alt={title}/>
                <p>{title}</p>
            </div>
        </>
    );
};

export default WorkDisplay;