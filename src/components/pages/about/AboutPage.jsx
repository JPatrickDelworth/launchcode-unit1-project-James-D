import './AboutMe.css'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'

// TODO: Place logo.

// TODO: Populate "About Me" textbox with information.

// TODO: Add scrollable text area for comments to be posted to.

// TODO: Implement code to add comments to comment area.

// TODO: more to come...


function About () {
    
    return (
        <div id="page">
            <div>
                <Header />
            </div>
            <div id="about">
                <div id="about-container">
                    <text id="title">About Me</text>
                    <br />
                    <text id="text">About me information...</text>
            </div>
                </div>
            <br></br>
            <br></br>
            <legend class="comment-title">Visitor Reply Submission Form</legend>
            <div id="form-container">
                <form class="form">
                    <div class="form">
                        <input type="text" id="name" name="name" placeholder="Name" required />
                        <input type="email" id="email" name="email" placeholder="Email" required />
                        <br />
                        <textarea id="message" name="message" rows="5" cols="30" placeholder="Comments..." required></textarea>
                        <br />
                    </div>
                    <div id="submit">
                        <input type="submit" value="Submit" />
                    </div>
                </form>  
            </div>
            <br />
            <br />
            <div id="comment-section">
                <div id="comment-container">
                    <textarea id="comment" name="comment" rows="15" cols="100"></textarea>
                </div>
            </div>
            <div>
                <Footer />
            </div>

        </div>

    );


}

export default About;