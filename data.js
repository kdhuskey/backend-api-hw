const episodes = [
    {
        id: 1, 
        season: 1, 
        episode: 1,
        name: 'Pilot',
        air_date: '2019-03-27',
        blurb: 'The vampires try to plan a lavish bloodfeast in honor of a visit by their ancient master from the Old Country.'

    },
    {
        id: 2, 
        season: 1, 
        episode: 2,
        name: 'City Council',
        air_date: '2019-04-03',
        blurb: 'The vampires get embroiled in local Staten Island politics as their first step to world domination.'

    },
    {
        id: 3, 
        season: 1, 
        episode: 3,
        name: 'Werewolf Feud',
        air_date: '2019-04-10',
        blurb: "The fragile truce between the vampires and Staten Island's werewolves is tested, and Colin Robinson finds romance with a new co-worker."

    },
    {
        id: 4, 
        season: 1, 
        episode: 4,
        name: 'Manhattan Night Club',
        air_date: '2019-04-17',
        blurb: 'The vampires venture into Manhattan, to make an alliance with an old friend who is now the king of the Manhattan vampires.'

    },
    {
        id: 5, 
        season: 1, 
        episode: 5,
        name: 'Animal Control',
        air_date: '2019-04-24',
        blurb: 'Lazslo, in bat form, is captured by Staten Island Animal Control and must be rescued, while Nadja can no longer resist reconnecting with her reincarnated lover Gregor.'

    },
    {
        id: 6, 
        season: 1, 
        episode: 6,
        name: 'Baron\'s Night out',
        air_date: '2019-05-01',
        blurb: 'The Baron awakens from his slumber and demands to experience the wonders of the New World in a night out in the town.'

    },
    {
        id: 7, 
        season: 1, 
        episode: 7,
        name: 'The Trial',
        air_date: '2019-05-08',
        blurb: 'The vampires must defend themselves as an international vampire tribunal gathers to judge them for their transgressions.'

    },
    {
        id: 8,
        season: 1,
        episode: 8,
        name: 'Citizenship',
        air_date: '2019-05-15',
        blurb: 'Nadja trains Jenna on how to take her first victim, and Nandor applies for American citizenship.'
    },
    {
        id: 9,
        season: 1,
        episode: 9,
        name: 'The Orgy',
        air_date: '2019-05-22',
        blurb: 'Tensions run high as the vampires prepare to hose the Biannual Vampire Orgy.'
    },
    {
        id: 10,
        season: 1,
        episode: 10,
        name: 'Ancestry',
        air_date: '2019-05-29',
        blurb: 'Nandor visits one of his living descendants, and a lover from Nadja\'s past re-emerges.'
    },
    {
        id: 11,
        season: 2,
        episode: 1,
        name: 'Resurrection',
        air_date: '2020-04-15',
        blurb: 'Nadja and Laszlo\'s new familiar poses problems for an increasingly anxious Guillermo, and the vampires enlist the services of a local necromancer.'
    },
    {
        id: 12,
        season: 2,
        episode: 2,
        name: 'Ghosts',
        air_date: '2020-04-15',
        blurb: 'The vampires hold a seance to deal with a ghost infestation, which leads to a larger ghost infestation.'
    },
    {
        id: 13,
        season: 2,
        episode: 3,
        name: 'Brain Scramblies',
        air_date: '2020-04-22',
        blurb: 'The vampires attend their first human Super Bowl party, while Guillermo\'s search for virgins uncovers a deadly threat.'
    },
    {
        id: 14,
        season: 2,
        episode: 4,
        name: 'The Curse',
        air_date: '2020-04-29',
        blurb: 'While the vampires fear they\'ve been electronically cursed, Guillermo tries to thwart a deadly threat to his masters.'
    },
    {
        id: 15,
        season: 2,
        episode: 5,
        name: 'Colin\'s Promotion',
        air_date: '2020-05-06',
        blurb: 'Colin Robinson gets promoted at work, and his new power threatens the balance of power in the vampire house.'
    },
    {
        id: 16,
        season: 2,
        episode: 6,
        name: 'On the Run',
        air_date: '2020-05-13',
        blurb: 'After a vengeful enemy from the past appears without warning, Laszlo flees his home and goes into hiding to avoid certain death.'
    },
    {
        id: 17,
        season: 2,
        episode: 7,
        name: 'The Return',
        air_date: '2020-05-20',
        blurb: 'The vampires offer shelter to an old nemesis who\'s down on his luck.'
    },
    {
        id: 18,
        season: 2,
        episode: 8,
        name: 'Collaboration',
        air_date: '2020-05-27',
        blurb: 'Nandor\'s old familiar from the 1970s returns to Staten Island, Guillermo leaves to serve a new master, and Nadja and Lazslo revive their musical act.'
    },
    {
        id: 19,
        season: 2,
        episode: 9,
        name: 'Witches',
        air_date: '2021',
        blurb: 'When Nandor and Laszlo are abducted by a coven of witches, the others must venture to Brooklyn to rescue them.'
    },
    {
        id: 20,
        season: 2,
        episode: 10,
        name: 'Nouveau Théåtre des Vampires',
        air_date: '2020-06-10',
        blurb: 'As they prepare to attend the most exclusive event on the vampiric social calendar, the vampires try to survive without Guillermo.'
    },
    {
        id: 21,
        season: 3,
        episode: 1,
        name: 'The Prisoner',
        air_date: '2021-09-02',
        blurb: 'Guillermo\'s fate hangs in the balance as the vampires receive a promotion.'
    },
    {
        id: 22,
        season: 3,
        episode: 2,
        name: 'The Cloak of Duplication',
        air_date: '2021-09-02',
        blurb: 'A forbidden artifact is used to help Nandor court a health club employee.'
    },
    {
        id: 23,
        season: 3,
        episode: 3,
        name: 'Gail',
        air_date: '2021-09-09',
        blurb: 'An old flame returns and an ancient vehicle is resurrected.'
    },
    {
        id: 24,
        season: 3,
        episode: 4,
        name: 'The Casino',
        air_date: '2021-09-16',
        blurb: 'The vampires embark on a road trip from which they may never return.'
    },
    {
        id: 25,
        season: 3,
        episode: 5,
        name: 'The Chamber of Judgement',
        air_date: '2021-09-23',
        blurb: 'Justice is served, both vampirically and also in small claims court.'
    },
    {
        id: 26,
        season: 3,
        episode: 6,
        name: 'The Escape',
        air_date: '2021-09-30',
        blurb: 'An ancient beast escapes and threatens the existence of all vampires everywhere.'
    },
    {
        id: 27,
        season: 3,
        episode: 7,
        name: 'The Siren',
        air_date: '2021-10-07',
        blurb: 'Two travelers are shipwrecked and a doll runs away from home.'
    },
    {
        id: 28,
        season: 3,
        episode: 8,
        name: 'The Wellness Center',
        air_date: '2021-10-14',
        blurb: 'Nandor is persuaded to reject vampirism and pursue a healthier lifestyle.'
    },
    {
        id: 29,
        season: 3,
        episode: 9,
        name: 'A Farewell',
        air_date: '2021-10-21',
        blurb: 'Colin has a birthday and a vampire says goodbye.'
    },
    {
        id: 30,
        season: 3,
        episode: 10,
        name: 'The Portrait',
        air_date: '2021-10-28',
        blurb: 'The housemates grieve the loss of one of their own.'
    },
    {
        id: 31,
        season: 4,
        episode: 1,
        name: 'TBA',
        air_date: '2021-07-12',
        blurb: ''
    },
    
    
    
]

module.exports = {
    episodes: episodes
}