const villainDatabase = {
    'Secret Squirrel': {
            'Executive Summary': {
                'image': "https://orig00.deviantart.net/8b50/f/2006/355/4/1/secret_squirrel_by_practicecactus.jpg",
                'Country of Origin': ['USA'],
                'Known Associates': ['Double Q', 'Morocco Mole', 'Trench Coat', 'Purple Fedora'], 
                'Known Aliases': ['Agent 000', 'Mel Blanc']
            },
            'Rap Sheet': {
                "Crimes": ["Acorn Smuggling", "Nut Laundering", "Murder in the 1st degree"],
                "Convictions": ["Tax Evasion", "Arson"],
                "Prisons": ["Shawshank State Prison", "Alcatraz"],
                "Witnesses": ["Morroco Mole", "George Jetson", "Fred Flintstone"],
                "Victims": ['Norville "Shaggy" Rogers', "Scooby Doo"]
                },
            'Financial Interests': {
                "Bank Accounts" : [10021965, 10091965, 10161965, 10231965],
                "Businesses" : [" Wolf in Cheap Cheap Clothing", "Royal Runaround", "Yellow Pinkie", "Five is a Crowd"],
                "Black Mailed" : ["Sub Swiper", "Masked Granny", "Robin Hood", "Capitan Kidd"],
                "Money Laundering Businesses" : ["Robot Rout", "The Pink Sky Mobile", "Spy in the Sky", "Ship of Spies"]
            }, 
            'News Feed': {
                "Horse Doping Ring Exposed": {
                    'Date': "April 2nd, 2018",
                    'Likelihood': 5,
                    'Type': "Leak",
                    'Victims': "National Jockeys Association",
                    'Witnesses': "Atom Ant",
                    'Investigated': "CIA"
                }, 
                "Death of Famous Mystery Solving Teen and Pet": {
                    'Date': "April 7th, 2018",
                    'Likelihood': 10,
                    'Type': "Assasination",
                    'Victims': "Norville \"Shaggy\" Rogers, S. Doo",
                    'Witnesses': "Fred Jones, Daphne Blake",
                    'Investigated': "FBI"
                },
                "Political Rival Slandered": {
                    'Date': "April 1st, 2018",
                    'Likelihood': 8,
                    'Type': "Smear Campaign",
                    'Victims': "B. Rubble",
                    'Witnesses': "F. Flintstone",
                    'Investigated': "NSA"
                }

            }
    }
}

localStorage.setItem('villainDatabase', JSON.stringify(villainDatabase))






