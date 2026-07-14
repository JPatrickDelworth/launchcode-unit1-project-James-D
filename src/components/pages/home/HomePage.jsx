import Footer from '../../layout/Footer'
import './Home.css'

// TODO: Create gameplay hook textbox.

// TODO: Place big image hook.

// TODO: Create plot hook textbox.

// TODO: Create image gallery.

// TODO: Implement expansion cards.

// TODO: more to come...

function Home () {

    return (
        <div id="home-page">
            <div class="home-container">
                <div id="home-gap1" />
                <div id="logo-container">

                        <img src="../../../../public/logos/FFXIV Logo V3.png" id="logo" alt="Final Fantasy XIV Title Logo" />

                </div>
                <div id="home-gap2" />
                <div id="overview">
                    <div class="text-container">
                        <p class="hook">Sing a song of six pence, a pocket full of rye, four and twenty black birds baked in a pie. When the pie was opened, the birds began to sing. Twas that not a dainty dish to set before ther king? The king was in his counting house, counting out his money. The queen was in the parlor, eating bread and honey. The main was in the garden, hanging out the clothes, when down came a blackbird and pecked off her nose. Ride a cock horse to Banbury Cross, to see a fine lady upon a white horse. With rings on her fingers and bells on her toes, she shall have music wherever she goes.</p>
                    </div>
                </div>
                <div id="home-gap3" />
                <div id="img-hook">
                    <div id="img-standin"><p>Plot Image</p></div>
                </div>
                <div id="plot">
                    <div class="text-container">
                        <p class="hook">This world has been connected. Tied to the darkness. Soon to be completely eclipsed. There is so very much to learn. You understand so little. A meaningless effort. One who knows nothing can understand nothing. Take a look at this tiny place. To the heart seeking freedom, this island is a prison surrounded by water. And so this boy sought out to escape from his prison. He sought a way to cross over into other worlds and he opened his heart to darkness. Don't bother, your voice can no longer reach him where he is. His heart belongs again to darkness. All worlds begin in darkness and all soo end. The heart is no different. Darkness sprouts within it; it grows, consumes it. Such is its nature. In the end every heart retruns the darkness whence it came. You see, darkness is the heart's true essence. So you have come this far and still you understand nothing. Every light must fade. Every heart return to darkness!</p>
                    </div>
                </div>
                <div id="gallery">
                    <div id="gallery-container">
                        <p>Image Gallery</p>
                    </div>
                </div>
                <div id="home-gap4" />
                <div id="expansions">
                    <p>Expansion Cards</p>
                </div>
                <div id="home-gap5" />
            </div>
            <Footer id="home-footer" />
        </div>
    );
}


export default Home
