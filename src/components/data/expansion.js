import arrLogo from '../../assets/logos/01.1 - A Realm Reborn Logo V2.png'
import hwLogo from '../../assets/logos/02.1 - Heavensward Logo V2.png'
import sbLogo from '../../assets/logos/03 JP - Stormblood Logo.webp'
import shbLogo from '../../assets/logos/04 JP - Shadowbringers Logo.webp'
import ewLogo from '../../assets/logos/05 JP - Endwalker Logo.webp'
import dtLogo from '../../assets/logos/06 JP - Dawntrail Logo.webp'
import ecLogo from '../../assets/logos/07 JP - Evercold.webp'

export const expansionInfo = [
    {
        id: "arr",
        name: "A Realm Reborn",
        release: "August 27, 2013",
        addedJobs: ["Paladin", "Warrior", "Dragoon", "Monk", "Bard", "Black Mage", "White Mage", "Summoner", "Scholar", "Ninja"],
        maxLvl: "50",
        description: `Hydaelyn─a vibrant planet blessed by the Light of the Crystal. \n\nAmid azure seas, encompassing the westernmost of the Three Great Continents, there lies a realm embraced by gods and forged by heroes. Her name...Eorzea.\n\nIt is here that your tale unfolds. Beckoned by the Mothercrystal─the source of all life─you must embark upon a quest to deliver the land from an eternity of Darkness.`,
        personalDescription: "Five years after the 7th Umbral Calamity, the world has completely changed. From this chaos emerges threats both old and new. The Garlean Empire, which had previously attempted to conquer Eorzea, has renewed its forces to make a second attempt at conquest. The beast tribes have been gathering mass amounts of crystals to summon forth their deities to lay waste to those who oppress them. The mothercrystal warns of a shadow whispering forbidden knowledge into the ears of those who have the power to bring great change. With the old alliances shattered, and peace hanging by a mere thread who shall take a stand and defend Eorzea? Will it be you?",
        logo: arrLogo
    },
    {
        id: "hw",
        name: "Heavensward",
        release: "June 23, 2015",
        addedJobs: ["Dark Knight", "Machinist", "Astrologian"],
        maxLvl: "60",
        description: `Owing to schemes in the shadows of Ul'dah, the Scions of the Seventh Dawn have been scattered, and the Warrior of Light has been forced to flee North.\n\nThrough granted shelter by Lord Haurchefant, our heroes must press on to Ishgard. But what trials await in this reclusive nation, locked in a never-ending struggle with dragons?\n\nCome what may, they must not falter, lest the light of hope be forever extinguished. `,
        personalDescription: "In the frozen north of Eorzea, beyond the sealed gates lay the theocracy of Ishgard. For decades it has closed its doors to outsiders, focusing only on its millennium long war against dragon kind. In such a hostile society, where mere implied association with dragons means death from the Inquisitors, you have found an unsteady refuge. But as you search for clues for your missing comrades, you uncover secrets, secrets that if leaked, would crumble the very foundation on which this war was built. Who's side will you take?",
        logo: hwLogo
    },
    {
        id: "sb",
        name: "Stormblood",
        release: "June 20, 2017",
        addedJobs: ["Samurai", "Red Mage", "Blue Mage"],
        maxLvl: "70",
        description: `New tales of daring and adventure await as the Warrior of Light prepares for a journey beyond the borders of Aldenard. Yet what new dangers await in Gyr Abania and Othard in the Far East? Behold the beauty of these distant lands and the beastmen and primals that threaten to plunge them into chaos.\n\nHaving brought an end to the thousand-year conflict between dragon and man in the north, the Warrior of Light and his comrades prepare to liberate Ala Mhigo, a land conquered by the Garlean Empire twenty years ago. Meanwhile, in the Far East, the freedom fighters of the fallen nation of Doma struggle to rekindle the fires of hope in their countrymen.\n\nThe time has come to embark upon a new adventure to realms near and far─to rise up with the people of Eorzea and the Far East, and cast down the curs of Garlemald! `,
        personalDescription: "Acts of terrorism have forced Eorzea into open war against the Garlean Empire. No longer can it stay out of the fray. Tales from across the border to Gyr Abania and from across the sea to Othard in the east, tell of the Empire's cruelty towards subjugated nations. They also tell of a monstrous man, whose bloodlust for the sport of battle knows no quenching. Join the resistance and lead the distressed to reclaim their freedom. Do not tarry, as the shadows pulling the strings are beginning to tighten the noose. Fight for freedom, and a future for all.",
        logo: sbLogo
    },
    {
        id: "shb",
        name: "Shadowbringers",
        release: "July 2, 2019",
        addedJobs: ["Gunbreaker", "Dancer"],
        maxLvl: "80",
        description: `Hero becomes villain as the Warrior of Light embraces the dark, and embarks upon an adventure that transcends worlds. Pore over these records─learn about the lands and the foes that await─and prepare for the trials ahead.\n\nAla Mhigo is at last free from imperial rule, but that liberty may prove fleeting as the Empire moves to both reclaim this bloodied nation and subjugate all of Eorzea.\n\nIn their hour of need, however, they cannot turn to the Warrior of Light. Nor to the Scions, who yet slumber, their souls adrift. The realm is left to struggle without its saviors, for they have been beckoned beyond time and space─beckoned to the First. Here a new adventure begins in a world where light ushers all unto oblivion. But hope is not yet lost, for where there is light there is shadow. `,
        personalDescription: "A sorcerous beckoning to stave off an unwanted future. A dying land bathed in eternal light. The remaining scattered cities offer no hope as most await oblivion. From the blighted land come creatures transfigured by the oppressive light into angelic beings that inflict swift judgement on any all who cross their path. There is only one hope to deliver this land from its fate. The light must be cleaved; darkness must be unleashed. As you were once known as the Warrior of Light, you must now become the Warrior of Darkness.",
        logo: shbLogo
    },
    {
        id: "ew",
        name: "Endwalker",
        release: "December 7, 2021",
        addedJobs: ["Reaper", "Sage"],
        maxLvl: "90",
        description: `Endwalker brings the tale of Hydaelyn and Zodiark to a conclusion eons in the making. To unravel its mysteries and conquer its challenges will be no common feat. May these records of key figures, looming adversaries, and lands yet untraveled serve you well.\n\nYet shadowed by their triumph in the First, the Warrior of Light and Scions of the Seventh Dawn are home at last. An even greater calamity than refulgent oblivion has been building in their absence, however─a second advent of the Final Days. Should all despair, the myriad conflicts that now ravage the land cannot but foretoken an end to life in the Source.\n\nOur tale─of a star, and of its souls─will see the Warrior of Light sail north to Sharlayan and east to Thavnair, forge a path to the heart of the Garlean Empire, and ascend to the heavens to set foot upon the very moon itself. FINAL FANTASY XIV's first grand saga approaches its highly anticipated conclusion! `,
        personalDescription: "The Final Days have arrived. All across the land, monstrous beings appear en masse. It is only a matter of time before the end of all things. Some look to fight, others look to flee, others still accept it as deserved. But this has all happened before in a time before memory. The mistakes of the shadows have caught up with the present. Call your allies for you have many. Gather your resolve for it is your shield. Plunge into the depths of history to find the key to the Final Days and extinguish it at the source. Everything has led to this moment. Will you succumb to despair?",
        logo: ewLogo
    },
    {
        id: "dt",
        name: "Dawntrail",
        release: "July 2, 2024",
        addedJobs: ["Viper", "Pictomancer", "Beastmaster"],
        maxLvl: "100",
        description: `Winds of opportunity bring a visitor from the New World, seeking the Warrior of Light's aid in a rite of succession to determine Tural's next ruler.\n\nAlongside Alphinaud, Alisaie and Erenville, the Warrior of Light embarks upon a journey across the Indigo Deep. Should rumor be true, the contest may lead them to the fabled gates of a City of Gold.\n\nLittle do they know that it will also see the Scions divided... `,
        personalDescription: "Across the sea to the west lies Tural, the New World. After 80 years, the aging monarch has begun a contest to choose his successor, and one of the claimants has come calling hearing stories of your prowess. Now is the time for adventure. Set sail across the blue to a world unseen by most of your kin. Help the claimant find her strength and together locate the mythical city of gold. Complete the feats, uncover the clues, and discover the secrets Tural still has left to tell.",
        logo: dtLogo
    },
    {
        id: "ec",
        name: "Evercold",
        release: "January 2027",
        addedJobs: ["TBD"],
        maxLvl: "110",
        description: ``,
        personalDescription: "In a land apart a once vibrant world has become naught but ice and death. The citizens despaired and sought refuge in the skies. As the world froze into nothigness beneath, montrous creatures continue to march endlessly across the land. But that may all change with the arrival of the Far Wanderer...",
        logo: ecLogo
    }

]