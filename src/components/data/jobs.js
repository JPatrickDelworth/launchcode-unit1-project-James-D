import paladinIcon from '../../assets/job-icons/01 - Paladin/Paladin SVG.svg'
import warriorIcon from '../../assets/job-icons/02 - Warrior/Warrior SVG.svg'
import dragoonIcon from '../../assets/job-icons/03 - Dragoon/Dragoon SVG.svg'
import monkIcon from '../../assets/job-icons/04 - Monk/Monk - SVG.svg'
import bardIcon from '../../assets/job-icons/05 - Bard/Bard - SVG.svg'
import blackMageIcon from '../../assets/job-icons/06 - Black Mage/Black Mage - SVG.svg'
import whiteMageIcon from '../../assets/job-icons/07 - White Mage/White Mage - SVG.svg'
import summonerIcon from '../../assets/job-icons/08 - Summoner/Summoner - SVG.svg'
import scholarIcon from '../../assets/job-icons/09 - Scholar/Scholar - SVG.svg'
import ninjaIcon from '../../assets/job-icons/10 - Ninja/Ninja - SVG.svg'
import darkKnightIcon from '../../assets/job-icons/11 - Dark Knight/Dark Knight - SVG.svg'
import machinistIcon from '../../assets/job-icons/12 - Machinist/Machinist - SVG.svg'
import astrologianIcon from '../../assets/job-icons/13 - Astrologian/Astrologian - SVG.svg'
import samuraiIcon from '../../assets/job-icons/14 - Samurai/Samurai - SVG.svg'
import redMageIcon from '../../assets/job-icons/15 - Red Mage/Red Mage - SVG.svg'
import gunbreakerIcon from '../../assets/job-icons/16 - Gunbreaker/Gunbreaker - SVG.svg'
import dancerIcon from '../../assets/job-icons/17 - Dancer/Dancer - SVG.svg'
import reaperIcon from '../../assets/job-icons/18 - Reaper/Reaper - SVG.svg'
import sageIcon from '../../assets/job-icons/19 - Sage/Sage - SVG.svg'
import viperIcon from '../../assets/job-icons/20 - Viper/Viper - SVG.svg'
import pictomancerIcon from '../../assets/job-icons/21 - Pictomancer/Pictomancer - SVG.svg'
import blueMageIcon from '../../assets/job-icons/22 - Blue Mage/Blue Mage - SVG.svg'
import beastmasterIcon from '../../assets/job-icons/23 - Beastmaster/Beastmaster - SVG.svg'

import paladin from '../../assets/Class Artwork/01 - Paladin/Paladin Artwork.webp'
import warrior from '../../assets/Class Artwork/02 - Warrior/Warrior Artwork.webp'
import dragoon from '../../assets/Class Artwork/03 - Dragoon/Dragoon Artwork.webp'
import monk from '../../assets/Class Artwork/04 - Monk/Monk Artwork.webp'
import bard from '../../assets/Class Artwork/05 - Bard/Bard Artwork.webp'
import blackMage from '../../assets/Class Artwork/06 - Black Mage/Black Mage Artwork.webp'
import whiteMage from '../../assets/Class Artwork/07 - White Mage/White Mage Artwork.webp'
import summoner from '../../assets/Class Artwork/08 - Summoner/Summoner Artwork.webp'
import scholar from '../../assets/Class Artwork/09 - Scholar/Scholar Artwork.webp'
import ninja from '../../assets/Class Artwork/10 - Ninja/Ninja Artwork.webp'
import darkKnight from '../../assets/Class Artwork/11 - Dark Knight/Dark Knight Artwork.webp'
import machinist from '../../assets/Class Artwork/12 - Machinist/Machinist Artwork.webp'
import astrologian from '../../assets/Class Artwork/13 - Astrologian/Astrologian Artwork.webp'
import samurai from '../../assets/Class Artwork/14 - Samurai/Samurai Artwork.webp'
import redMage from '../../assets/Class Artwork/15 - Red Mage/Red Mage Artwork.webp'
import gunbreaker from '../../assets/Class Artwork/16 - Gunbreaker/Gunbreaker Artwork.webp'
import dancer from '../../assets/Class Artwork/17 - Dancer/Dancer Artwork.webp'
import reaper from '../../assets/Class Artwork/18 - Reaper/Reaper Artwork.webp'
import sage from '../../assets/Class Artwork/19 - Sage/Sage Artwork.webp'
import viper from '../../assets/Class Artwork/20 - Viper/Viper Artwork.webp'
import pictomancer from '../../assets/Class Artwork/21 - Pictomancer/Pictomancer Artwork.webp'
import blueMage from '../../assets/Class Artwork/22 - Blue Mage/Blue Mage Artwork.webp'
import beastmaster from '../../assets/Class Artwork/23 - Beastmaster/Beastmaster Artwork.webp'
// TODO: Add descriptions and image data

export const jobs = {
    mainJobs: [
        {
            name: "Paladin",
            base: "Gladiator",
            weapon: "Sword and Shield",
            position: "Tank",
            expansion: "A Realm Reborn (Base Game)",
            description: `For centuries, the elite of the Sultansworn have served as personal bodyguards to the royal family of Ul'dah. Known as paladins, these men and women marry exquisite swordplay with stalwart shieldwork to create a style of combat uncompromising in its defense. Clad in brilliant silver armor, they charge fearlessly into battle, ever ready to lay down their lives for their liege. \n\nTo be a paladin is to protect, and those who choose to walk this path will become the iron foundation upon which the party's defense is built.`,
            icon: paladinIcon,
            art: paladin,

        
        },
        {
            name: "Warrior",
            base: "Marauder",
            weapon: "Greataxe",
            position: "Tank",
            expansion: "A Realm Reborn (Base Game)",
            description: `On the northernmost edge of Abalathia's Spine exists a mountain tribe renowned for producing fearsome mercenaries. Wielding greataxes and known as warriors, these men and women learn to harness their inner-beasts and translate that power to unbridled savagery on the battlefield. \n\nIn former times which saw war waged ceaselessly in Eorzea, the warriors featured prominently on the front lines of battle. With the arrival of peacetime, however, their art has descended into the shadows of obscurity, where it remains to this day.`,
            icon: warriorIcon,
            art: warrior,
        
        },
        {
            name: "Dragoon",
            base: "Lancer",
            weapon: "Polearm",
            position: "Melee DPS",
            expansion: "A Realm Reborn (Base Game)",
            description: `Of all the things that are symbolic of the nation of Ishgard, few are more recognized than the dragoon. Born amidst the timeless conflict between men and dragons, these lance-wielding knights have developed an aerial style of combat, that they might better pierce the scaled hides of their mortal foes. \n\nTaking to the firmament as though it were an extension of the land, they descend upon the enemy with every onze of their bodies behind the blow. It is this penetrative power that characterizes the dragoon.`,
            icon: dragoonIcon,
            art: dragoon,
        
        },
        {
            name: "Monk",
            base: "Pugilist",
            weapon: "Fist Weapons (Iron Knuckles, Tonfas, etc.)",
            position: "Melee DPS",
            expansion: "A Realm Reborn (Base Game)",
            description: `Though now under Garlean rule, the city-state of Ala Mhigo once boasted the greatest military might of all Eorzea. Among its standing armies were the monks—ascetic warriors as dreaded by foes on the field of battle as the city-state's great pikemen. \n\nThe monks comprised an order known as the Fist of Rhalgr, and it was to this god—the Destroyer—that they devoted their lives of worship. By mastering seats of power within the body known as chakra, they are capable of performing extraordinary physical feats.`,
            icon: monkIcon,
            art: monk,
        
        },
        {
            name: "Bard",
            base: "Archer",
            weapon: "Bow",
            position: "Ranged DPS",
            expansion: "A Realm Reborn (Base Game)",
            description: `The word "bard" ordinarily puts folk in mind of those itinerant minstrels, fair of voice and nimble of finger, who earn their coin performing in taverns and the halls of great lords. Few know, however, that bards in fact trace their origins back to the bowmen of eld, who sang in the heat of battle to fortify the spirits of their companions. \n\nIn time, their impassioned songs came to hold sway over the hearts of men, inspiring their comrades to great feats and granting peace unto those who lay upon the precipice of death.`,
            icon: bardIcon,
            art: bard,
        
        },
        {
            name: "Black Mage",
            base: "Thaumaturge",
            weapon: "Staff",
            position: "Magical Ranged DPS",
            expansion: "A Realm Reborn (Base Game)",
            description: `In days long past, there existed an occult and arcane art known as black magic—a potent magic of pure destructive force born forth by a sorceress of unparalleled power. Those who learned to wield this instrument of ruin came to be called black mages, out of both fear and respect for their gift. Yet great power served to corrupt the judgment of mortal man, and so he unknowingly set out upon the path of ruin. \n\nAdventurers who take the black will become agents of devastation, capable of annihilating those who oppose them through little more than the force of their will.`,
            icon: blackMageIcon,
            art: blackMage,
        
        },
        {
            name: "White Mage",
            base: "Conjurer",
            weapon: "Cane",
            position: "Healer",
            expansion: "A Realm Reborn (Base Game)",
            description: `White magic, the arcane art of succor, was conceived eras past that the world might know comfort. Alas, man began perverting its powers for self-gain, and by his wickedness brought about the Sixth Umbral catastrophe. Although the art subsequently became forbidden, it is now in the midst of a revival at the hands of the Padjal, chosen of the elementals. \n\nThose who would walk the path of the white mage are healers without peer, possessed of the power to deliver comrades from the direst of afflictions—even the icy grip of death itself.`,
            icon: whiteMageIcon,
            art: whiteMage,
        
        },
        {
            name: "Summoner",
            base: "Arcanist",
            weapon: "Grimoire",
            position: "Magical Ranged DPS",
            expansion: "A Realm Reborn (Base Game)",
            description: `The beast tribes of Eorzea worship and summon forth beings known as primals, among which are Ifrit, Garuda, and Titan. Yet what is a god to one man is a demon to another, for the city-states of Eorzea see these beings as a grave threat to their collective survival. \n\nIn times immemorial, there lived mages who had not only the power to summon the primals, but also the means to transmute the primals' essences, thus binding them to their will. Known simply as summoners, the existence of these men and women and their arcane art have been all but lost to the ages.`,
            icon: summonerIcon,
            art: summoner,
        
        },
        {
            name: "Scholar",
            base: "Arcanist",
            weapon: "Codex",
            position: "Healer",
            expansion: "A Realm Reborn (Base Game)",
            description: `In an age long past, when mankind flourished under the radiance of arcane mastery, the island of Vylbrand was home to a city-state called Nym. Though the history of that age tells of countless wars waged with earth-shattering incantations, it was the brilliant strategic maneuvering of Nym's scholars that allowed their mundane army of mariners to throw back would-be conquerors time and again. These learned men and women defended the freedom of their tiny nation with their unique command over spell-weaving faeries, utilizing the creatures' magicks to heal the wounded and bolster the strength of their allies.`,
            icon:scholarIcon,
            art: scholar,
        
        },
        {
            name: "Ninja",
            base: "Rogue",
            weapon: "Twin Daggers",
            position: "Melee DPS",
            expansion: "A Realm Reborn (Base Game)",
            description: `Hailing from the war-torn lands of the Far East, the secret arts of the ninja were born of necessity, and have since given rise to a unique breed of highly-trained combatants. \n\nAble to manipulate the vital energies of the land, the air, and living beings, they manifest their power through the weaving of signs, unleashing a wide array of attacks against their foes. Master the arts of the ninja and learn to bend the tide of battle to your will.`,
            icon: ninjaIcon,
            art: ninja,
        
        },
        {
            name: "Dark Knight",
            base: "N/A",
            position: "Tank",
            weapon: "Claymore",
            expansion: "Heavensward",
            description: `The pious Ishgardian clergy guide the flock, and the devout knights protect the weak. Yet even the holiest of men succumb to the darkest of temptations. \n\nNone dare to administer justice to these sacrosanct elite residing outside the reach of the law. Who, then, defends the feeble from the transgressions of those meant to guide and protect them? \n\nA valiant few take up arms to defend the downtrodden, and not even the holy priests and knights can escape their judgment. Pariahs in their own land, they are known by many as “dark knights.” \n\nThese sentinels bear no shields declaring their allegiance. Instead, their greatswords act as beacons to guide the meek through darkness.`,
            icon: darkKnightIcon,
            art: darkKnight,
        
        },
        {
            name: "Machinist",
            base: "N/A",
            weapon: "Firearm",
            position: "Ranged DPS",
            expansion: "Heavensward",
            description: `The war with Dravania rages on, brutal and unrelenting. With no end in sight, the Holy See grows desperate. As her dragoons lay down their lives in defense of their home, Ishgard turns to technology to protect her sons and daughters. Great cannons and ballistas now line the city walls, plucking dragons from the sky. \n\nFollowing the example of Cid Garlond, who has demonstrated the potency of magitek, the Skysteel Manufactory works tirelessly on the development of advanced armaments. As new and devastating weapons are brought to the fray, a new class of champion arises to wield them―the machinist.`,
            icon: machinistIcon,
            art: machinist,
        
        },
        {
            name: "Astrologian",
            base: "N/A",
            weapon: "Astrolabe",
            position: "Healer",
            expansion: "Heavensward",
            description: `Ever has man coveted knowledge, and none more so than that of his fate. Thus did he labor to master the skill of foresight—but initial efforts bore little fruit. That is, until he looked to the stars above, which foretell the coming seasons, and learned to read the heavens. \n\nThough this gift is known today as astrology, the people of Sharlayan saw fit to not only read the stars, but to write their movements as well. By attuning their aetherial energies to that of constellations, they learned to wield magicks with heretofore unseen properties. \n\nThus was astromancy born—a new form of magick which grants its users power over fate. Employing a star globe and divining deck in their miraculous deeds, fortune always smiles upon these masters of arcana.`,
            icon: astrologianIcon,
            art: astrologian,
        
        },
        {
            name: "Samurai",
            base: "N/A",
            weapon: "Katana",
            position: "Melee DPS",
            expansion: "Stormblood",
            description: `Far across the rolling waves, towards the rising sun, there lies the island nation of Hingashi. \n\nIn the distant past, the realm's great lords vied for supremacy over its seagirt confines in a long and bloody conflict. And taking to battle in their lieges' names were noble swordsmen whose art was forged in the crucible of war: the samurai. \n\nEventually, the nation was unified under one banner, and these warriors came to wield their katana not upon fields as part of an army, but upon streets as protectors of the peace. \n\nBut as a neglected blade grows dull with rust, so too do men forget their purpose. Amidst waning memories of the old ways, a determined few hold fast to their convictions, hands by katana grips, awaiting the moment for steel to sing.`,
            icon: samuraiIcon,
            art: samurai,
        
        },
        {
            name: "Red Mage",
            base: "N/A",
            weapon: "Rapier",
            position: "Magical Ranged DPS",
            expansion: "Stormblood",
            description: `On the eastern edge of Abalathia's Spine lies the mountainous region of Gyr Abania. \n\nIt is in these elevated lands that people took shelter, when a burning star guided them away from the Sixth Umbral Calamity's treacherous floodwaters. The survivors gathered from near and far, and amongst them were refugees of the sorcerous cities of Mhach and Amdapor. \n\nThese sworn enemies buried their history for the sake of the future, and cast aside their vestments of black and white. Upon the remnants of their arts a new discipline was built, and the first red mages stepped forward with rapiers in hand to fight back against the rising tides of destruction.`,
            icon: redMageIcon,
            art: redMage,
        
        },
        {
            name: "Gunbreaker",
            base: "N/A",
            weapon: "Gunblade",
            position: "Tank",
            expansion: "Shadowbringers",
            description: `The Hrothgar of northern Ilsabard have passed the art of the gunblade from one generation to the next. The weapon itself combines a sword with a firing mechanism, emitting a range of magical effects by utilizing aetherially imbued cartridges. Originally employed by Queen Gunnhildr's personal guard, they were once known as "Gunnhildr's Blades" and differ greatly from the similarly named weapons used in the Garlean Empire.`,
            icon: gunbreakerIcon,
            art: gunbreaker,
        
        },
        {
            name: "Dancer",
            base: "N/A",
            weapon: "Chakrams",
            position: "Ranged DPS",
            expansion: "Shadowbringers",
            description: `From the Near Eastern nation of Thavnair comes a troupe of bewitchingly graceful performers. Though certainly elegant and beautiful, their movements also speak of martial discipline─of a pulsing, persistent energy whose rhythm can inspire souls and soothe troubled hearts. Inured to the hardships of the road, these dancers have learned to land throwing weapons with the same exacting precision as their footfalls, removing any who would obstruct the endless beat of the dance.`,
            icon: dancerIcon,
            art: dancer,
        
        },
        {
            name: "Reaper",
            base: "N/A",
            weapon: "Scythe",
            position: "Melee DPS",
            expansion: "Endwalker",
            description: `The Garleans' forebears were once humble farmers who made their home among the sun-drenched fields of southern Ilsabard. That was, until they were driven from this paradise by invaders wielding arcane magicks. Forced north into the frigid mountains, the survivors sought a means to tap into the reservoir of aether otherwise closed to them. A daring few found their answer within the void, binding themselves to its creatures to gain verboten power─power fed by the souls of the slain. Once more they took up their scythes, this time to reap a crimson harvest.`,
            icon: reaperIcon,
            art: reaper,
        
        },
        {
            name: "Sage",
            base: "N/A",
            weapon: "Nouliths",
            position: "Healer",
            expansion: "Endwalker",
            description: `The nation of Sharlayan is the cradle of knowledge, and the Studium its foremost institution of learning. Yet more so than its incomparable library and formidable assemblage of Archons, this prestigious academy is famed for blending traditionally distinct fields to produce revolutionary new disciplines. Among these, perhaps the most distinguished is an altruistic art which draws upon the wisdom of aetherology, sorcery, and medicine. Dubbed somanoutics, the art seeks to heal and protect by manipulating corporeal aether through the use of nouliths, a flying array of foci. Practitioners are dedicated to the betterment of mankind, and for their wisdom and compassion, eventually came to be known simply as sages.`,
            icon: sageIcon,
            art: sage,
        
        },
        {
            name: "Viper",
            base: "N/A",
            weapon: "Twin Swords",
            position: "Melee DPS",
            expansion: "Dawntrail",
            description: `Among the myriad beasts of Tural, a select few awaken to preternatural power, becoming what are known as tural vidraal. To overcome the threat of these almighty beings, hunters studied one of nature's deadliest predators─one capable of overcoming foes greater even than themselves: the viper. They are swift and agile, with dual blades like fangs to bite, or combine into a single weapon to weave about the battlefield. Named for the serpent that inspired their fighting style, the vipers of Tural remain steadfast in their duty to defend the people.`,
            icon: viperIcon,
            art: viper,
        
        },
        {
            name: "Pictomancer",
            base: "N/A",
            weapon: "Brush",
            position: "Magical Ranged DPS",
            expansion: "Dawntrail",
            description: `Though the Fifth Astral Era is most famously associated with the War of the Magi, a wealth of lesser-known legends were forged in that bygone age. Among them is the tale of Archon Relm, an itinerant artist and mage who relinquished her traditional staff for a magicked brush. With it, she would render abstract images to life, establishing an entirely new school of magic in so doing. Masters of this arcane discipline follow in the Archon's footsteps, wielding vibrant hues of aether to invoke all manner of fantastical beasts, weapons, and landscapes from their mind's eye─for the source of a pictomancer's power lies not in their artistic skill, but the richness of their imagination, with which they strive to paint a brighter future.`,
            icon: pictomancerIcon,
            art: pictomancer,
        
        }
    ],
    limitedJobs: [
        {
            name: "Blue Mage",
            base: "N/A",
            weapon: "Magician's Cane",
            position: "Magical Ranged DPS",
            expansion: "Stormblood",
            description: `A so-called mage of rather questionable character claims to have mastered an outlandish form of spellcasting that resembles neither black nor white magic during his voyage to the New World. Allegedly, anyone who purchases one of his soul crystals can learn to mimic the aetherial magicks of wild creatures. But can he be trusted, or is he merely a con artist looking to make a quick gil?`,
            icon: blueMageIcon,
            art: blueMage,
        
        },
        {
            name: "Beastmaster",
            base: "N/A",
            weapon: "One-Handed Axe",
            position: "Melee DPS",
            expansion: "Dawntrail",
            description: `From tacticians of the former Republic of Landis to the griffin breeders of Ala Mhigo, skilled practitioners have long tamed wild beasts for mankind's gain. Myriad such traditions are kept alive across the land, the adherents of which have now arrived in the Black Shroud...`,
            icon: beastmasterIcon,
            art: beastmaster,
        
        }
    ],
    tradeJobs: [
        {
            name: "Miner",
            base: "N/A",
            tool: "Pickaxe",
            position: "Gathering",
            expansion: "Base Game",
            description: "",
        
        },
        {
            name: "Botanist",
            base: "N/A",
            tool: "Hatchet",
            position: "Gathering",
            expansion: "Base Game",
            description: "",
        
        },
        {
            name: "Fisher",
            base: "N/A",
            tool: "Fishing Rod",
            position: "Gathering",
            expansion: "Base Game",
            description: "",
        
        },
        {
            name: "Carpenter",
            base: "N/A",
            tool: "Saw",
            position: "Crafting",
            expansion: "Base Game",
            description: "",
        
        },
        {
            name: "Blacksmith",
            base: "N/A",
            tool: "Cross-pein Hammer",
            position: "Crafting",
            expansion: "Base Game",
            description: "",
        
        },
        {
            name: "Armorer",
            base: "N/A",
            tool: "Hammer",
            position: "Crafting",
            expansion: "Base Game",
            description: "",
        
        },
        {
            name: "Goldsmith",
            base: "N/A",
            tool: "Hammer",
            position: "Crafting",
            expansion: "Base Game",
            description: "",
        
        },
        {
            name: "Leatherworker",
            base: "N/A",
            tool: "Knife",
            position: "Crafting",
            expansion: "Base Game",
            description: "",
        
        },
        {
            name: "Weaver",
            base: "N/A",
            tool: "Needle",
            position: "Crafting",
            expansion: "Base Game",
            description: "",
        
        },
        {
            name: "Alchemist",
            base: "N/A",
            tool: "Alembic",
            position: "Crafting",
            expansion: "Base Game",
            description: "",
        
        },
        {
            name: "Culinarian",
            base: "N/A",
            tool: "Skillet",
            position: "Crafting",
            expansion: "Base Game",
            description: "",
        
        }
    ]
    
}