import { Link } from "react-router-dom";
import classes from './WorkDetails.module.css';

function WorkDetails({ title, description, image, tags }) {
    return (
        <div className={classes.workWrapper}>
            <Link to=".." relative="path" className={classes.back}>
                ← Back to projects
            </Link>

            <div className={classes.header}>
                {tags && tags.length > 0 && (
                    <span className={classes.eyebrow}>{tags.join(' · ')}</span>
                )}
                <h1>{title}</h1>
            </div>

            <div className={classes.divider} />

            {image && image.length > 0 && (
                <div className={classes.imageWrapper}>
                    <img src={image[0]} alt={title} />
                </div>
            )}

            <ul className={classes.descriptionList}>
                {description.map((text, index) => (
                    <li key={index} className={classes.descriptionItem}>
                        <span className={classes.bullet}>→</span>
                        <span>{text}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default WorkDetails;
