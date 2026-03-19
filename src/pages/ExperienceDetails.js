import { useParams, Link } from "react-router-dom";
import { EXPERIENCE_DATA } from "../data/experience";
import WorkDetails from "../components/WorkDetails";
import classes from "./ExperienceDetails.module.css";

function ExperienceDetailsPage() {
    const params = useParams();
    const foundExperience = EXPERIENCE_DATA.find(
        (exp) => exp.title === params.experienceTitle
    );

    if (!foundExperience) {
        return (
            <div className={classes.notFound}>
                <p>Experience not found.</p>
                <Link to="/react_portfolio/experiences" className={classes.notFoundLink}>
                    ← Back to experiences
                </Link>
            </div>
        );
    }

    return (
        <div className={classes.page}>
            <WorkDetails {...foundExperience} />
        </div>
    );
}

export default ExperienceDetailsPage;
