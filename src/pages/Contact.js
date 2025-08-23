import classes from "./Contact.module.css"

const contacts = [
    {type: 'Email', link: "mailto:joshuajue888@gmail.com", text: "joshuajue888@gmail.com"},
    {type: 'LinkedIn', link: "https://www.linkedin.com/in/josh-j-100147191/", text: "here"},
    {type: 'GitHub', link: "https://github.com/JJue888", text: "here"},
]

function ContactPage() {
    return (
        <>
            <div className={classes.contact}>
                <header>
                    <h1>Contact Info</h1>
                </header>
                <ul className="">
                    {contacts.map((contact) => (
                        <li key={contact.type}>
                            <p>{contact.type}:
                                <a href={contact.link}> {contact.text}</a>
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default ContactPage;