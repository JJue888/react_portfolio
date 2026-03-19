import { Link } from "react-router-dom";
import WorkDisplay from "../components/WorkDisplay";
import { EXPERIENCE_DATA } from "../data/experience";
import classes from "./Experiences.module.css";

function ExperiencesPage() {
    return (
        <div className={classes.page}>
            <header className={classes.head}>
                <span className={classes.eyebrow}>Career</span>
                <h1>Experiences</h1>
            </header>

            <div className={classes.grid}>
                {EXPERIENCE_DATA.map((experience) => (
                    <Link to={experience.title} key={experience.title}>
                        <WorkDisplay {...experience} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default ExperiencesPage;
