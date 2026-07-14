import Footer from '../../layout/Footer'
import logo from '../../../../public/logos/FFXIV Logo V3.png'
import './CharNClass.css'

// TODO: Create layout for playable race icons and info card.

// TODO: Create layout for class icons.

// TODO: Implement playable race icon to info pane buttons

// TODO: Implement class card overlay on click

// TODO: more to come...

function CharNClass () {


    return (
        <div id="char-page">
            <div id="char-container">
                <div id="char-gap1"/>
                <div id="logo-container">
                    <img src={logo} id="logo" alt="Final Fantasy XIV Logo" />
                </div>
                <div id="char-gap2"/>
                <div id="char">
                    <div id="char-col1" ><p></p></div>
                    <div id="char-logos">
                        <p>CHARACTOR LOGOS</p>
                    </div>
                    <div id="char-col2" ><p></p></div>
                    <div id="char-main">
                        <p>CHARACTER MAIN</p>
                    </div>
                    <div id="char-col3" ><p></p></div>
                </div>
                <div id="char-gap3" />
                <div class="class-container">
            
                    <div class="char-col4"><p></p></div>
                    <div id="class1">
                        <p> JOB ICONS 1-20</p>
                    </div>
                    <div class="char-col5"><p></p></div>
                </div>
                <div class="class2-container">
                    <div class="char-col4"><p></p></div>
                    <div id="class2">
                        <p>JOB ICONS 21-23</p>
                    </div>
                    <div class="char-col5"><p></p></div>

                </div>
                <div id="char-gap4" />

            </div>
            <Footer id="char-footer"/>  
        </div>
    )
}


export default CharNClass;