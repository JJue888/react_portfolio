import {NavLink} from "react-router-dom";
import classes from "./NavBar.module.css";

const navLinks = [
    {title: "Home", href: "/react_portfolio/"},
    {title: "About", href: "/react_portfolio/about"},
    {title: "Projects", href: "/react_portfolio/projects"},
    {title: "Experiences", href: "/react_portfolio/experiences"},
    {title: "Contact", href: "/react_portfolio/contact"},
]

const bgColor = 'bg-gray-800';
const modalColor = 'bg-gray-900';

function NavBar() {

    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <NavLink to={link.href} className={({isActive}) => isActive ? classes.active : undefined}>{link.title}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;