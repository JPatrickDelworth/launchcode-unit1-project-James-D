import { useState, useEffect } from 'react'
import Footer from '../../layout/Footer'
import logo from '../../../assets/logos/FFXIV Logo V3.png'
import './AboutMe.css'

// TODO: Populate "About Me" textbox with information.

// TODO: Add scrollable text area for comments to be posted to.

// TODO: Implement code to add comments to comment area.

// TODO: more to come...


function About () {
    const sampleComments = [
        {
            name: "Heironymus Bosch",
            email: "hgbosch@yesThisIsPurgatory.com",
            comment: "Your quaint little attempt at a website has temporarily quelled the horrific visage of the netherworld that plagues my canvas.",
            date: "November 14, 1485  • 3:07 AM"
        },
        {
            name: "The McGriddle",
            email: "breakfastbitch@imluvinit.com",
            comment: "Eat me, and know heartburn.",
            date: "July 18, 2026  • 10:17 PM"
        }
    ]
    
    const [comments, setComments] = useState(() => {
        const savedComments = localStorage.getItem("comments");

        if(savedComments) {
            return JSON.parse(savedComments);
        }

        return sampleComments
    });

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        comment: ""
    })

    useEffect(() => {
        localStorage.setItem("comments", JSON.stringify(comments));
    }, [comments])

    const handleSubmit = (event) => {
        event.preventDefault();
        if (
            formData.name.trim() === "" || formData.email.trim() === "" || formData.comment.trim() === ""
        ) {
            return;
        }
        const now = new Date();
        
        const currentDate = 
            now.toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
            }) + " • " +
            now.toLocaleTimeString ("en-US", {
                hour: "numeric",
                minute: "2-digit",
                hour12: true

            })

        setComments ([
            {
                name: formData.name,
                email: formData.email,
                comment: formData.comment,
                date: currentDate
            },
            ...comments
        ]);
        setFormData ({
            name: "",
            email: "",
            comment: ""
        })
    }

    return (
        <div id="about-page">
            
            <div id="about-container">
                <div id="about-gap1" />
                <div id="about-logo-container">
                    <img src={logo} id="logo" alt="Final Fantasy XIV Title Logo" />
                </div>
                <div id="about-gap2" />
                <div id="title-container">
                    <div className="title">
                        About Me
                    </div>
                </div>
                <div id="about-gap3" />
                <div id="text-container">
                    <div id="text-box">
                        <div id="text">
                            About me information...
                        </div>
                    </div>
                </div>
                <div id="about-gap4" />
                <div id="comment-title-container">
                    <div className="title">
                        Visitor Reply Submission Form

                    </div>
                </div>
                <div id="about-gap5" />
                <div id="form-container">
                    <form className="form" onSubmit={handleSubmit}>
                        <div id="id-form-container">
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                placeholder="Name" 
                                value={formData.name}
                                onChange={(event) => {
                                    setFormData({
                                        ...formData,
                                        name: event.target.value
                                    });
                                }} 
                                required 
                            />
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                placeholder="Email"
                                value={formData.email} 
                                onChange={(event) => {
                                    setFormData({
                                        ...formData,
                                        email: event.target.value
                                    })
                                }}
                                required 
                            />
                        </div>
                        <div id="form-gap1" />
                        <textarea 
                            id="message" 
                            name="message" 
                            rows="10" 
                            cols="30" 
                            placeholder="Comments..."
                            value={formData.comment}
                            onChange={(event) => {
                                setFormData({
                                    ...formData,
                                    comment: event.target.value
                                })
                            }}   
                            required 
                        >
                        </textarea>
                        <div id="form-gap2" />
                        <div id="submit">
                            <input id="submit-button" type="submit" value="Submit" />
                        </div>
                    </form>  
                </div>
                <div id="about-gap6" />
                <div id="comment-container">
                    <div className="title">
                        Visitor Comments
                    </div>
                    <div id="comments-list">
                        {comments.map((comment, index) => (
                            <div className="comment-card" key={index}>
                                <h4>{comment.name}</h4>
                                <small>{comment.date}</small>
                                <p>{comment.comment}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div id="about-gap7" />
            </div>
            <Footer />

        </div>

    );


}

export default About;