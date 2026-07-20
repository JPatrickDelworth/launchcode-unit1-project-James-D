import hyurArt from '../../assets/Playable Race Artwork/01 - Hyur No BG Cropped.png'
import elezenArt from '../../assets/Playable Race Artwork/02 - Elezen No BG Cropped.png'
import roegadynArt from '../../assets/Playable Race Artwork/03 - Roegadyn No BG Cropped.png'
import lalafellArt from '../../assets/Playable Race Artwork/04 - Lalafell No BG Cropped.png'
import miqoteArt from "../../assets/Playable Race Artwork/05 - Miqo'te No BG Cropped.png"
import auRaArt from '../../assets/Playable Race Artwork/06 - Au Ra No BG Cropped.png'
import vieraMaleArt from '../../assets/Playable Race Artwork/07.1 - Viera Female No BG 2 Cropped.png'
import hrothgarMaleArt from '../../assets/Playable Race Artwork/08.1 - Hrothgar Male No BG 2 Cropped.png'

export const playableRaces = [
    {
        name: "Hyur",
        sub1: "Midlanders",
        sub2: "Highlanders",
        overview: `Over the course of three great migratory waves, the Hyur have become the most populous of Eorzea's races, and make up a prominent portion of the population of each of the realm's city-states. Possessed of an average physique in height and build compared to the other races, they champion personal freedom and liberty, with an eclectic variety of languages and traditions stemming from their diverse backgrounds. The Hyur are known for their peculiarly short, rounded ears and are well-suited for traveling long distances by foot—a trait thought to account for their swift proliferation.`,
        namingConvention: `Midlander names are based on Anglo Saxon, Celtic, and Briton names from medieval Europe. (ex: Eddard Baker, Joyse Brown, Rauffe Shepard) Highlander names are based in Germanic or Norman roots.(ex: Aethlwold Hunter, Sigberta Strong)`,
        namingConventionLong: `Midlanders first names are based on Anglo Saxon, Celtic, and Briton names from medieval Europe. 
                           Last names are based on profession (ex: Eddard Baker, Joyse Brown, Rauffe Shepard). Highlander
                           first names are based on Germanic or Norman roots. Last names are are usually harsh sounding
                           due to Highlanders being a historically warring people (ex: Aethlwold Hunter, Sigberta Strong).`,
        art: hyurArt

    },
    {
        name: "Elezen",
        sub1: "Wildwood",
        sub2: "Duskwight",
        overview: `The tall and slender Elezen were once the predominant race in Eorzea. Believing the realm to be theirs by divine right—a gift from the Twelve themselves, they continue to harbor a deep pride at being the chosen race of the gods even to this day. While this originally led to conflict with the invading Hyur tribe during the early Sixth Astral Era, they reached a mutual understanding and work towards mutual peace and prosperity to this day. \n\nBoth clans possess hearing keener than that of the other races', with the Duskwight possessing a particularly heightened sense of hearing—even among Elezen. Their lifespan is longer than the other races' by about one- or two-tenths.`,
        namingConvention: `Wildwood and Duskwight Elezen names are based on French. (ex: Arthurioux Beltardois, Cliaux Derinloire).`,
        art: elezenArt
    },
    {
        name: "Roegadyn",
        sub1: "Sea Wolves",
        sub2: "Hellsguard",
        overview: `Massive and heavily muscled, the Roegadyn are known for their brawny builds and piercing eyes and are the largest and most rugged of Eorzea's races. They are descended from a maritime people that roamed northern seas, though many of their ancestors came to dwell in Eorzea. Though often considered a barbaric and fiercely competitive race, they are also known for their honor, compassion, and loyalty. The histories are filled with tales of Roegadyn warriors and their courageous deeds. \n\nRoegadyn are said to be possessed of near-endless stamina, which may account for the impressive resilience shown by many Roegadyn.`,
        namingConvention: `Roegadyn names are self chosen, and are a descriptor followed by a noun. Sea Wolves use the ancestral Roegadyn language for their names (inspired by Germanic languages) (ex: Merlwyb Bloefhiswyn, Ghimswys Saesraenwyn). Hellsguard use similar naming conventions but translated to Eorzean (English) (ex: Tall Mountain, Diving Sparrow).`,
        namingConventionLong: `Roegadyn first names are usually self chosen, usually being a descriptor followed by a noun. Sea Wolves
                           use the ancestral Roegadyn language for their names (inspired by Germanic languages). They also use last 
                           names which are taken from their father's first name and suffix meaning "son of" or "daughter of" ("syn" and 
                           "wyn"). An in game example for this is "Merlwyb Bloefhiswyn" which translates to: Sea Woman Daughter of Blue 
                           Fish. Other examples include: Ketenborn Helmannsyn and Ghimswys Saesraenwyn. Hellsguard use similar naming 
                           conventions but translated to Eorzean (English). They also do not typically use last names. Examples include: 
                           Tall Mountain and Diving Sparrow.`,
        art: roegadynArt
    },
    {
        name: "Lalafell",
        sub1: "Plainsfolk",
        sub2: "Dunesfolk",
        overview: `Short, stocky, and rotund, the Lalafell are the smallest of Eorzea's races. They maintain a youthful, childlike appearance, even in old age, making their true age difficult for other races to ascertain. Originally an agricultural people of the southern isles, they came to Eorzea following mercantile trade. They're welcoming of outsiders, and share prosperous relations with the other races. \n\nThe nimble Lalafell make up for their lack of physical strength with swift reflexes and sharpness of mind. They are one of the most well-established races in the realm and are found in great numbers in nearly every city.`,
        namingConvention: `Lalafell names have heavy use of rhyme, rhythm, repetition, and alliteration. There are four specific phoneme patterns used. Plainsfolk males and females use patterns AB-CB and ABB-AB respectively (ex: Alka Zolka, Ulala Ula ). Dunesfolk males and feamles use patterns AAB-CCB and AAB-AB respectively (ex: Jajariku Nanariku, Jajano Jano).`,
        namingconventionLong: `Lalafell names have heavy use of rhyme, rhythm, repetition, and alliteration. There are four specific phoneme
                           patterns used. They do not use family last names and thus both first and last names are unique to the 
                           individual. Plainsfolk males use the phoneme pattern AB-CB to make names like Zorido Manarido or Alka Zolka. 
                           The beginning of each name is different but the end is the same. Plainsfolk females use the phoneme pattern 
                           ABB-AB to make names like Mimomo Mimo or Ulala Ula. Dunesfolk males use the phoneme pattern AAB-CCB, where A 
                           and C are always one syllable with B and D always being two syllables. This makes names like Jajariku Nanariku
                           and Fafajoni Kukujoni. Lastly, Dunesfolk females use the phoneme AAB-AB with each phoneme being a single 
                           syllable to create names such as Jajano Jano and Chuchumu Chumu.`,
        art: lalafellArt
    },
    {
        name: "Miqo'te",
        sub1: "Seekers of the Sun",
        sub2: "Keepers of the Moon",
        overview: `Though their presence in Eorzea is lesser than the other races, the Miqo'te are easily distinguished by their large, projecting, feline ears and their restless, supple tails. Their ancestors made their way to the realm during the Age of Endless Frost in the Fifth Umbral Era, traversing frozen seas in pursuit of wildlife. Territoriality causes many of them to lead solitary lives, and males in particular shy from contact with others. For reasons yet unclear, female Miqo'te vastly outnumber males, a unique trait among Eorzea's races. \n\nAdaptation to a hunting lifestyle has fashioned them with a keen sense of smell and powerful legs, with their tail providing them exceptional balance.`,
        namingConvention: `Every Seeker of the Sun first name is preceded by a letter representing their tribe followed by an apostrophe and then their first name. (ex: K'tyaka Nunh, N'bolata Raha) Keepers of the Moon pass their mother's name to their children. (ex: Gota Jaab, Okhi'a Nbolo)`,
        namingConventionLong: `Seekers of the Sun are a patriarchal society and their names match this. Every Seeker first name is preceded
                           by their a letter representing their tribe followed by an apostrophe and then their first name such as 
                           Y'shtola or B'alih. Close friends and companions will drop the tribe letter (Shtola or Alih). Male Seeker 
                           first names are usually only one or two syllables while female Seeker first names are typically two to three 
                           syllables. Male Seekers have one of two last names, "Nunh" for breeding males or "Tia" for all other males. 
                           All males are born tia and can only become nunh if they challenge and defeat a tribe's nunh. Female Seekers 
                           take their father's first name as their last name. Example Seeker names include: K'tyaka Nunh (Tyaka, nunh of 
                           the K tribe), O'bhen Tia (Bhen, tia of the O tribe), N'bolata Raha (Bolata of the N tribe, daughter of Raha), 
                           and H'amneko Odh (Amneko of the H tribe, daughter of Odh). Keepers of the Moon by contrast are a matriarchal 
                           society. The mother's last name is passed down to her children. In a reversal of Seekers, Keeper female first 
                           names are shorter ne to two syllables, while male first names are longer. Further adding to their matriarchal 
                           nature, female Keepers get a unique first name with their mother's last name, while all males take their 
                           mother's first and last name with a suffix that determines which number son they are (first son up to tenth).
                           Examples include: Okhi Nbolo, Gota Jaab, Okhi'a Nbolo (First son of Okhi Nbolo), Gota'li Jaab 
                           (Third son of Gota Jaab).`,
        art: miqoteArt
    },
    {
        name: "Au Ra",
        sub1: "Raen",
        sub2: "Xaela",
        overview: `Hailing from the Far Eastern continent of Othard, the Au Ra were rare in Eorzea until recently, when increasing unrest in their homeland forced a not-insignificant number to journey west as refugees. \n\nThe curved horns and beautifully-patterned scales of the Au Ra often invite speculation that they are descended from dragons. This has long been disputed, with scholars citing distinct differences between the two as evidence against this. The enhanced hearing and spatial recognition granted by their horns are traits not found in draconian horns, and the extreme sexual dimorphism seen in the race is also widely unseen in dragons.`,
        namingConvention: `Au Ra often take names from Hyur living in the same area. Hailing from the east, Raen names are based on Japanese names while Xaela names are based on Mongolian. Au Ra that grew up in other regions tend to have names typical to that region. (Raen ex: Tsukikage Urabe, Kurenai Shisui) (Xaela ex: Iturgen Qestir, Sadu Dotharl)`,
        namingConventionLong:`Au Ra naming conventions are not unique to them. They often take names from Hyur
                           living in the same area signifying a similar back culture. Hailing from the east, Raen names are based on 
                           Japanese names while Xaela names are based on Mongolian. Au Ra that grew up in other regions tend to have 
                           names typical to that region. Male names tend to have names related to power while female names are usually
                           related to nature. Xaela tend to use their clan name as their last name.`,
        art: auRaArt
    },
    {
        name: "Viera",
        sub1: "Rava",
        sub2: "Veena",
        overview: `Of tall stature and frame, the Viera are similar in appearance to the Hyur and Elezen, save for their long, leporine ears. \n\nThe word Viera means "people of the wood" and they are most commonly found in the forests of southern Othard, with the Rava clan making its home in the Golmore Jungle and the Veena making their home in the forests along the foothills of the southwestern Skatay Range. \n\nThey are a strictly matriarchal people; Viera males are notoriously rare and reclusive, shunning contact even with their own kin. They are also known for their incredible longevity, as they can live to ages upward of two-hundred and forty years.`,
        namingConvention: `Viera have multiple names throughout their lives. The names their parents give them, the name they choose when they reach adulthood ("forest name", which resembles Scandinavian names), and names they choose should they leave their homeland ("city name", chosen based on things they like or names from other peoples). (Rava ex: Ysera Bysnoe, Qestra Djt-Marouc) (Veena ex: Sonja Ymir, Arjm Huorlwesfv)`,
        namingConventionLong: `Viera names are not differentiated by clan. They usually have multiple names throughout their lives. The 
                           names their parents give them is usually gender and sex neutral since the sex of young viera is not typically 
                           obvious until they reach adulthood at 13. At this point they usually choose their own names. When residing 
                           in their homeland, Viera have a "forest name" which resemble real-world Scandinavian names. If they choose 
                           to leave their home and explore the wider world, they abandon their "forest name" and choose a "city name" 
                           based on things they like or based on the names from other races they encounter. A female Viera's last name 
                           is typically the name of the village she was born in. But if she leaves the village and takes a "city name" 
                           she will also abandon her last name and choose a new one for herself. Forest names include: Ruuj, Shara, 
                           Rena, Rael, Bjonse, Venase, and Ukina. Example Rava last names include: Hyskaris, Eruyt, Atoel, and Iryut. 
                           Example Veena last names include: Lesrekta, Ymir, Gucuma, and Kisne. Male Viera last names are usually taken 
                           from the surname of the elder male who trained them upon first leaving their village. Male Rava who reside 
                           in the forest around their village may take one of 12 names representing either the celestial or worldly
                           realm and a world that represaents one elemental aspect within it. They believe keeping this balance is
                           important and should a male with one of these names pass away, another male will adopt it. Veena Males last
                           names are usually a combination of a word that references snow crystals with the word for guardian (wesfv).
                           Examples of the 12 elemental male Rava last names include: Djt-Marouc ("Star" - heavenly water), Rehw-Nong
                           ("Frost" - worldly ice), and Rehw-Gilda ("Sword" - worldly fire). Examples of Veena male last names include:
                           Sjadarwesfv ("Needle"), Huorlwesfv ("Shield"), and Phiitehwesfv ("Seagull").`,
        art: vieraMaleArt
    },
    {
        name: "Hrothgar",
        sub1: "Helions",
        sub2: "The Lost",
        overview: `Hailing from the distant shores of Ilsabard, the Hrothgar are a burly people of lionlike appearance—or the males are, at least. Females number staggeringly few among their population, and thus are rarely so much as glimpsed by the other races. \n\nThe Hrothgar's imposing countenance─mitigated not at all by their sharp claws and still sharper fangs—incited panic amongst Eorzeans upon their arrival. As they were also unable to communicate, initial interactions with the commonfolk often escalated into conflict. It was not until the Hrothgar gained mastery of the common tongue that fears were allayed, and in time they would be as neighbors, welcome in all corners of the realm. The bulk of Hrothgar remain concentrated in the areas in and around Bozja, where they continue to struggle to liberate their homeland from the empire and rebuild.`,
        namingConvention: `Hrothgar first names are based on Slavic names. Helion lastnames, are based on the queen they served. If their queen is alive at the time of their birth or still living as acting queen, Helion last names begin with an 'A' which means 'in service of'. The Lost do not serve a matriarch. Instead, their last names all end with 'sch', which means 'lost'. (ex: Balsaljen Ulgasch, Marsak Apella, and Radovan Slobasch)`,
        art: hrothgarMaleArt

    }
]