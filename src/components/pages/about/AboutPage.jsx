import './AboutMe.css'
import Footer from '../../layout/Footer'

// TODO: Populate "About Me" textbox with information.

// TODO: Add scrollable text area for comments to be posted to.

// TODO: Implement code to add comments to comment area.

// TODO: more to come...


function About () {
    
    return (
        <div id="about-page">
            
            <div id="about-container">
                <div id="about-gap1" />
                <div id="about-logo-container">
                    <img src="../../../../public/logos/FFXIV Logo V3.png" id="logo" alt="Final Fantasy XIV Title Logo" />
                </div>
                <div id="about-gap2" />
                <div id="title-container">
                    <div id="title">
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
                    <div id="comment-title">
                        Visitor Reply Submission Form

                    </div>
                </div>
                <div id="about-gap5" />
                <div id="form-container">
                    <form class="form">
                        <div id="id-form-container">
                            <input type="text" id="name" name="name" placeholder="Name" required />
                            <input type="email" id="email" name="email" placeholder="Email" required />
                        </div>
                        <div id="form-gap1" />
                        <textarea id="message" name="message" rows="10" cols="30" placeholder="Comments..." required ></textarea>
                        <div id="form-gap2" />
                        <div id="submit">
                            <input id="submit-button" type="submit" value="Submit" />
                        </div>
                    </form>  
                </div>
                <div id="about-gap6" />
                <div id="comment-container">
                    <div id="comment-title">
                        Visitor Comments
                    </div>
                    <textarea id="comment" name="comment" rows="40" cols="300"></textarea>
                </div>
                <div id="about-gap7" />
            </div>
            <Footer />

        </div>

    );


}

export default About;