import "./About.css";
import Me from "./Me";

export default function About() {
    return (
        <div className="con">
            <img className="bg-img" src="/birds.jpg" alt="background" />
            <div className="me-con">
                <Me />
            </div>

            <section className="title-con">
                <h1 className="anima-text">About</h1>
            </section>

            <section className="about-con">
                <p>
                    I am a Full Stack Web Developer with perennial years of
                    design work experience. My journey across tech teams made me
                    keen about giving my design a technical perspective. I love
                    coding as I enjoy working on both the front and the backend.
                </p>
                <p>
                    I build websites from prototype to production. Creating
                    sketches and developing interactive, innovative solutions
                    with a strong <strong>user experience</strong> emphasize.
                </p>

                <p>Berlin based. For now.</p>
            </section>
        </div>
    );
}
