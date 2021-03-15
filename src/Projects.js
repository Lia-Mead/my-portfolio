import "./Projects.css";
import React from "react";
import { useState } from "react";
import GifPlayer from "react-gif-player";
// import { ReactComponent as Next } from "./next.svg";
// import { ReactComponent as Play } from "./play.svg";
import Me from "./Me";

export default function Projects() {
    const [isPlaying, setIsPlaying] = useState(false);

    const playOrPause = (e) => {
        setIsPlaying(!isPlaying);
    };

    const projects = [
        {
            id: 0,
            name: "All that Jazz",
            description:
                "My one-week final project from the course at Spiced Academy",
            image: "/allthatjazz.jpg",
            gif: "/allthatjazz.gif",
            url: "https://allthat-jazz.herokuapp.com/",
            css: "left",
            stack: "React, Node.js, PostgreSQL, Socket.IO, AWS",
        },
        {
            id: 1,
            name: "Epic Time",
            description:
                "A Social network for 90s lovers for contacts and some nostalgia chats",
            image: "/epic-time.jpg",
            gif: "/epic-time.gif",
            url: "https://epic-time.herokuapp.com/",
            css: "right",
            stack: "React, Node.js, PostgreSQL, Socket.IO, AWS",
        },
        {
            id: 2,
            name: "Stop the Stomp",
            description:
                "Petition project for collecting e-signatures against stomping neighbors",
            image: "/stop.jpg",
            gif: "/stop.gif",
            url: "https://petition-for-dummies.herokuapp.com/",
            css: "left",
            stack: "Handlebars, Node.js, PostgreSQL",
        },
        {
            id: 3,
            name: "Mureal",
            description:
                "An image oriented platform dedicated to street art and murals",
            image: "/mureal.jpg",
            gif: "/mureal.gif",
            url: "https://mureal.herokuapp.com/",
            css: "color4",
            stack: "Vue.js, Node.js, PostgreSQL, AWS",
        },
        {
            id: 4,
            name: "Searchify",
            description: "Search your artists and albums with the spotify API",
            image: "/searchify.jpg",
            gif: "/searchify.gif",
            css: "color5",
            stack: "Node.js, Spotify API",
        },
        {
            id: 5,
            name: "Connect Four",
            description: "Connect Four game retro style",
            image: "/connect-four.jpg",
            gif: "/connect-four.gif",
            css: "color6",
            stack: "Node.js, JavaScript",
        },
    ];

    return (
        <>
            <img className="bg-img" src="/birds.jpg" alt="background" />

            <section className="me-con">
                <Me />
            </section>

            <section className="title-con">
                <h1 className="anima-text">Portfolio</h1>
            </section>

            <section className="pro-con">
                {projects &&
                    projects.map((pro) => (
                        <div className="pro" key={pro.id}>
                            <h2>
                                {"{"} {pro.name} {"}"}
                            </h2>

                            <p>{pro.description}</p>
                            <img
                                src="/stack.svg"
                                alt="stack"
                                className="stack"
                            />
                            <p>{pro.stack}</p>
                            {pro.gif && (
                                <GifPlayer
                                    className="gif"
                                    gif={pro.gif}
                                    onClick={() => playOrPause()}
                                    still={pro.image}
                                />
                            )}
                            {!pro.gif && (
                                <img
                                    className="pro-img"
                                    src={pro.image}
                                    alt={`screenshot of ${pro.name}`}
                                />
                            )}
                            {pro.url && (
                                <a
                                    className="go-box project-icon rotate-center"
                                    href={pro.url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <h3>Go</h3>
                                </a>
                            )}
                            {!pro.url && (
                                <p className="skin">
                                    Employ to deploy, meanwhile check out the
                                    GIF
                                </p>
                            )}
                        </div>
                    ))}
            </section>
        </>
    );
}

// className={`${pro.css}`}
