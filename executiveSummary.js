const execSum = {
    'image': "https://orig00.deviantart.net/8b50/f/2006/355/4/1/secret_squirrel_by_practicecactus.jpg",
    'name': "Secret Squirrel",
    'Country of Origin': ['USA'],
    'Known Associates': ['Double Q', 'Morocco Mole', 'Trench Coat', 'Purple Fedora'], 
    'Known Aliases': ['Agent 000', 'Mel Blanc']
}

const uploadDatabase = (identifier, database) => {
    localStorage.setItem([identifier], JSON.stringify(database));
}

uploadDatabase('execSum', execSum);

