import { Link } from "react-router-dom";
import classes from './Home.module.css';

const stack = ["React", "React Router", "JavaScript", "CSS Modules", "Java", "Python"];

function HomePage() {
    return (
        <div className={classes.hero}>
            <span className={classes.eyebrow}>Portfolio</span>

            <h1>
                Hi, I'm <span>Joshua Jue</span>
            </h1>

            <p className={classes.subtitle}>
                Senior CS &amp; Software Engineering student at Rose-Hulman Institute of Technology.
                I build thoughtful software and enjoy exploring what's possible across the stack.
            </p>

            <div className={classes.divider} />

            <div className={classes.actions}>
                <Link to="/react_portfolio/projects" className={classes.btnPrimary}>
                    View Projects →
                </Link>
                <Link to="/react_portfolio/contact" className={classes.btnSecondary}>
                    Get in touch
                </Link>
            </div>

            <div className={classes.stack}>
                <span className={classes.stackLabel}>Technologies</span>
                <div className={classes.stackTags}>
                    {stack.map((item) => (
                        <span key={item} className={classes.stackTag}>{item}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomePage;
