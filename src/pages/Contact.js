import classes from "./Contact.module.css";

const contacts = [
    {
        type: "Email",
        icon: "✉",
        link: "mailto:joshuajue888@gmail.com",
        text: "joshuajue888@gmail.com",
    },
    {
        type: "LinkedIn",
        icon: "in",
        link: "https://www.linkedin.com/in/josh-j-100147191/",
        text: "linkedin.com/in/josh-j",
    },
    {
        type: "GitHub",
        icon: "{}",
        link: "https://github.com/JJue888",
        text: "github.com/JJue888",
    },
];

function ContactPage() {
    return (
        <div className={classes.page}>
            <span className={classes.eyebrow}>Let's connect</span>
            <h1 className={classes.pageTitle}>Contact</h1>
            <p className={classes.subtitle}>
                I'm currently open to new opportunities. Whether you have a question,
                want to collaborate, or just want to say hi — feel free to reach out.
            </p>

            <div className={classes.divider} />

            <ul className={classes.list}>
                {contacts.map((contact) => (
                    <li key={contact.type} className={classes.item}>
                        <div className={classes.itemLeft}>
                            <span className={classes.icon}>{contact.icon}</span>
                            <span className={classes.type}>{contact.type}</span>
                        </div>
                        <a
                            href={contact.link}
                            className={classes.link}
                            target={contact.link.startsWith("http") ? "_blank" : undefined}
                            rel={contact.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                            {contact.text} ↗
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ContactPage;
