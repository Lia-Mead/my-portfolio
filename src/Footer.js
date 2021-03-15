import "./Footer.css";

export default function Footer() {
    return (
        <footer>
            <div className="foot-note">© Made with ♡ by Liat Meadows 2021</div>
            <a
                className="link-con"
                href="https://github.com/Lia-Mead"
                target="_blank"
                rel="noreferrer"
            >
                <img className="icon" src="/github.svg" alt="github" />
                gitHub
            </a>
            <p>
                <a href="mailto:meadowsliat@gmail.com">meadowsliat@gmail.com</a>
            </p>
        </footer>
    );
}
