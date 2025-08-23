import {Link} from "react-router-dom";
import WorkDisplay from "../components/WorkDisplay";
import {EXPERIENCE_DATA} from "../data/experience";
import classes from "./Experiences.module.css"

function ExperiencesPage() {

    return (
        <>
            <div>
                <header className={classes.head}>
                    <h1 className="">Experiences</h1>
                </header>
                <div>
                    <ul className={classes.experiences}>
                        {EXPERIENCE_DATA.map((project) => (
                            <li key={project.title} className="">
                                <Link to={project.title}>
                                    <WorkDisplay {...project} />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ExperiencesPage;