// TODO: Organize if needed, check for accuracy, additional fees.
export const fees = {
    subscription : [
        {
            tier: "Entry",
            subLength: "30 days",
            price: "$12.99",
            charPerSrvr: 8,
            charPerDC: 8
        },
        {
            tier: "Standard",
            subLength: [
               "30 days",
               "90 days",
               "180 days" 
            ],
            price: [
                "$14.99",
                "$13.99",
                "$12.99"
            ],
            charPerSrvr: 8,
            charPerDC: 40
        }
    ],
    gameCost : [
        {
            name: "Free Trial",
            price: "Free",
            contains: "Most content in the base game and first three expansions (Heavensward, Stormblood, Shadowbringers). Certain restrictions apply."
        },
        {
            name: "Starter Edition",
            price: "$19.99",
            contains: "Base game + first three expansions (Heavensward, Stormblood, Shadowbringers)."
        },
        {
            name: "Complete Edition",
            price: "$59.99",
            contains: "Base game + all expansions up to current patch (Heavensward, Stormblood, Shadowbringers, Endwalker, Dawntrail)."
        },
        {
            name: "Complete Collector's Edition",
            price: "$139.99",
            contains: "Base game + all expansions + Collector's Edition Digital Upgrade for each expansion."
        }
    ],
    upgrade: [
        {
            name: "A Realm Reborn Collector's Edition Digital Upgrade",
            price: "$19.99",
            contains: "Fat Chocobo Mount, Coeurl Mount, Behemoth Chocobo Barding, Wind-Up Moogle Minion, Baby Behemoth Minion, Helm of Light"
        },
        {
            name: "Heavensward Collector's Edition Digital Upgrade",
            price: "$19.99",
            contains: "Flying Griffin Mount, Dark-Knight Cecil-themed Baron Helm, Wind-Up Kain, Fantasia (One time character editor)"
        },
        {
            name: "Stormblood Collector's Edition Digital Upgrade",
            price: "$19.99",
            contains: "Syldra Mount, Wind-Up Bartz Minion, Chicken Knife Red Mage Weapon"
        },
        {
            name: "Shadowbringers Collector's Edition Digital Upgrade",
            price: "$19.99",
            contains: "Grani Mount, Wind-Up Fran Minion, Revolver Gunbreaker Weapon"
        },
        {
            name: "Endwalker Collector's Edition Digital Upgrade",
            price: "$19.99",
            contains: "Arion Mount, Wind-Up Porom Minion, Death Scythe Reaper Weapon"
        },
        {
            name: "Dawntrail Collector's Edition Digital Upgrade",
            price: "$19.99",
            contains: "Ark Mount, Wind-Up Garnet Minion, Chocobo Brush"
        },
        {
            name: "Complete Collector's Edition Digital Upgrade",
            price: "$99.95",
            contains: "All collector's edition items."
        }
    ],
    services: [
        {
            name: "Character Renaming Service",
            price: "$10.00 per name change.",
            about: "Allows you to change the first and last name of your character."
        },
        {
           name: "Home World Transfer Service",
           price: `$18.00 per world change, or Free if transferring from a congested world to a preferred world, 
                   or from a non preferred+ world to a preferred+ world.`,
           about: `Allows you to change the world your character is based in to another world on your data center 
                   or to a world on another data center.`
        },
        {
            name: "Retainer Service",
            price: "$2.00 per month per retainer up to seven retainers ($14.00).",
            about: `Retainers are NPCs in game that carry extra items for you (175 inventory slots per retainer), 
                    sell designated items on the market board, and they can gather crafting materials. The game gives paid 
                    subscribers two for free before having to pay for additional retainers. Max number of retainers possible
                    is 9 (free plus all paid extras), or 10 (free, plus all paid extras, plus one from paying the subscription
                    for the companion app).`
        },
        {
            name: "Companion App",
            price: "Free for base features, $5.00 per month for premium features",
            about: `The app allows you to organize your in game inventory, adjust prices of items you are selling on the market 
                    board, manage your retainer ventures, chat with in game friends, and check character data. Registering with
                    the app unlocks an additional free teleport destination in game, a free emote, and two portrait/adventurer
                    plates. Premium features include: the ability to organize retainer and chocobo saddlebag inventory from the
                    app, double the kupo nuts per login (an in game currency), the ability to hold more kupo nuts, the ability
                    to hire an extra retainer, and double the chocobo saddlebag space.
                    `
        }

    ],
    onlineStore: `Price varies from item to item. includes online store exclusive items (mounts, emotes, fashion, furniture), and 
                  items from previous in-game events`

}