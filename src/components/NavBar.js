import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";
import { DarkModeToggle } from "./DarkModeToggle";

const navLinks = [
    { title: "Home", href: "/react_portfolio/" },
    { title: "About", href: "/react_portfolio/about" },
    { title: "Projects", href: "/react_portfolio/projects" },
    { title: "Experiences", href: "/react_portfolio/experiences" },
    { title: "Contact", href: "/react_portfolio/contact" },
];

function NavBar() {
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <NavLink
                                to={link.href}
                                end={link.title === "Home"}
                                className={({ isActive }) =>
                                    isActive ? classes.active : undefined
                                }
                            >
                                {link.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className={classes.right}>
                <DarkModeToggle />
            </div>
        </header>
    );
}

export default NavBar;
