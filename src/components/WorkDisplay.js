import React from "react";
import classes from "./WorkDisplay.module.css";

function WorkDisplay({ title, image, tags }) {
    return (
        <div className={classes.container}>
            <div className={classes.imageWrapper}>
                <img src={image[0]} alt={title} />
            </div>
            <div className={classes.body}>
                <div>
                    {tags && tags.length > 0 && (
                        <span className={classes.tag}>{tags[0]}</span>
                    )}
                    <p className={classes.title}>{title}</p>
                </div>
                <span className={classes.arrow}>↗</span>
            </div>
        </div>
    );
}

export default WorkDisplay;
