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
            description: "",
            icon: paladinIcon,
            art: paladin,

        
        },
        {
            name: "Warrior",
            base: "Marauder",
            weapon: "Greataxe",
            position: "Tank",
            expansion: "A Realm Reborn (Base Game)",
            description: "",
            icon: warriorIcon,
            art: warrior,
        
        },
        {
            name: "Dragoon",
            base: "Lancer",
            weapon: "Polearm",
            position: "Melee DPS",
            expansion: "A Realm Reborn (Base Game)",
            description: "",
            icon: dragoonIcon,
            art: dragoon,
        
        },
        {
            name: "Monk",
            base: "Pugilist",
            weapon: "Fist Weapons (Iron Knuckles, Tonfas, etc.)",
            position: "Melee DPS",
            expansion: "A Realm Reborn (Base Game)",
            description: "",
            icon: monkIcon,
            art: monk,
        
        },
        {
            name: "Bard",
            base: "Archer",
            weapon: "Bow",
            position: "Ranged DPS",
            expansion: "A Realm Reborn (Base Game)",
            description: "",
            icon: bardIcon,
            art: bard,
        
        },
        {
            name: "Black Mage",
            base: "Thaumaturge",
            weapon: "Staff",
            position: "Magical Ranged DPS",
            expansion: "A Realm Reborn (Base Game)",
            description: "",
            icon: blackMageIcon,
            art: blackMage,
        
        },
        {
            name: "White Mage",
            base: "Conjurer",
            weapon: "Cane",
            position: "Healer",
            expansion: "A Realm Reborn (Base Game)",
            description: "",
            icon: whiteMageIcon,
            art: whiteMage,
        
        },
        {
            name: "Summoner",
            base: "Arcanist",
            weapon: "Grimoire",
            position: "Magical Ranged DPS",
            expansion: "A Realm Reborn (Base Game)",
            description: "",
            icon: summonerIcon,
            art: summoner,
        
        },
        {
            name: "Scholar",
            base: "Arcanist",
            weapon: "Codex",
            position: "Healer",
            expansion: "A Realm Reborn (Base Game)",
            description: "",
            icon:scholarIcon,
            art: scholar,
        
        },
        {
            name: "Ninja",
            base: "Rogue",
            weapon: "Twin Daggers",
            position: "Melee DPS",
            expansion: "A Realm Reborn (Base Game)",
            description: "",
            icon: ninjaIcon,
            art: ninja,
        
        },
        {
            name: "Dark Knight",
            base: "N/A",
            position: "Tank",
            weapon: "Claymore",
            expansion: "Heavensward",
            description: "",
            icon: darkKnightIcon,
            art: darkKnight,
        
        },
        {
            name: "Machinist",
            base: "N/A",
            weapon: "Firearm",
            position: "Ranged DPS",
            expansion: "Heavensward",
            description: "",
            icon: machinistIcon,
            art: machinist,
        
        },
        {
            name: "Astrologian",
            base: "N/A",
            weapon: "Astrolabe",
            position: "Healer",
            expansion: "Heavensward",
            description: "",
            icon: astrologianIcon,
            art: astrologian,
        
        },
        {
            name: "Samurai",
            base: "N/A",
            weapon: "Katana",
            position: "Melee DPS",
            expansion: "Stormblood",
            description: "",
            icon: samuraiIcon,
            art: samurai,
        
        },
        {
            name: "Red Mage",
            base: "N/A",
            weapon: "Rapier",
            position: "Magical Ranged DPS",
            expansion: "Stormblood",
            description: "",
            icon: redMageIcon,
            art: redMage,
        
        },
        {
            name: "Gunbreaker",
            base: "N/A",
            weapon: "Gunblade",
            position: "Tank",
            expansion: "Shadowbringers",
            description: "",
            icon: gunbreakerIcon,
            art: gunbreaker,
        
        },
        {
            name: "Dancer",
            base: "N/A",
            weapon: "Chakrams",
            position: "Ranged DPS",
            expansion: "Shadowbringers",
            description: "",
            icon: dancerIcon,
            art: dancer,
        
        },
        {
            name: "Reaper",
            base: "N/A",
            weapon: "Scythe",
            position: "Melee DPS",
            expansion: "Endwalker",
            description: "",
            icon: reaperIcon,
            art: reaper,
        
        },
        {
            name: "Sage",
            base: "N/A",
            weapon: "Nouliths",
            position: "Healer",
            expansion: "Endwalker",
            description: "",
            icon: sageIcon,
            art: sage,
        
        },
        {
            name: "Viper",
            base: "N/A",
            weapon: "Twin Swords",
            position: "Melee DPS",
            expansion: "Dawntrail",
            description: "",
            icon: viperIcon,
            art: viper,
        
        },
        {
            name: "Pictomancer",
            base: "N/A",
            weapon: "Brush",
            position: "Magical Ranged DPS",
            expansion: "Dawntrail",
            description: "",
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
            description: "",
            icon: blueMageIcon,
            art: blueMage,
        
        },
        {
            name: "Beastmaster",
            base: "N/A",
            weapon: "One-Handed Axe",
            position: "Melee DPS",
            expansion: "Dawntrail",
            description: "",
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