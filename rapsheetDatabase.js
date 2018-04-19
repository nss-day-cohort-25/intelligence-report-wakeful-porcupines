const RapSheetDataBase = 
    {
    'title': "Rap Sheet",    
    "Crimes": ["Acorn Smuggling", "Nut Laundering", "Murder in the 1st degree"],
    "Convictions": ["Tax Evasion", "Arson"],
    "Prisons": ["Shawshank State Prison", "Alcatraz"],
    "Witnesses": ["Morroco Mole", "George Jetson", "Fred Flintstone"],
    "Victims": ['Norville "Shaggy" Rogers', "Scooby Doo"]
    }


const store = (directoryName, directory) => {
    const directoryString = JSON.stringify(directory);
    localStorage.setItem(directoryName, directoryString);
}

store("rapSheet", RapSheetDataBase);

