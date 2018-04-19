/*********************
 DOM element variables
*********************/
const profileViewer = document.querySelector('#profileViewer')
const summariesViewer = document.querySelector('#summariesViewer')
const newsFeedViewer = document.querySelector('#newsFeedViewer')

/*******************************
 Functions to edit the database
********************************/

//reload database to Local Storage each time a change is made:
const saveDB = () => {localStorage.setItem('villainDatabase', JSON.stringify(villainDatabase))}

// create new villain, add them to the database
const createNewVillain = (name) => {
    const newVillain = {
        'Executive Summary': {
            'image':'',
            'Country of Origin': [],
            'Known Associates': [], 
            'Known Aliases': []
        },
        'Rap Sheet': {
            "Crimes": [],
            "Convictions": [],
            "Prisons": [],
            "Witnesses": [],
            "Victims": []
        }, 
        'Financial Interests': {
            "Bank Accounts" : [],
            "Businesses" : [],
            "Black Mailed" : [],
            "Money Laundering Businesses" : []
        },
        'News Feed': {}
    }
    villainDatabase[name] = newVillain
    saveDB()
}

//insert and edit profile items:
const editProfile = (name, section, key, value ) => {
    if (key === 'image') {
        villainDatabase[name][section][key] = value
    } else {
    villainDatabase[name][section][key].push(value)
    }
    saveDB()
}

//create new News Feed item:
const createNewsItem = (name, title, date, likelihood, type, victims, witnesses, investigated ) => {
    const newItem = {
        'Date': date,
        'Likelihood': likelihood,
        'Type': type,
        'Victims': victims,
        'Witnesses': witnesses,
        'Investigated': investigated
    }
    villainDatabase[name][title] = newItem
    saveDB()
}

//edit news item:
const editNewsItem = (name, event, key, value) => {
    villainDatabase[name][eventName][key] = value
}
/***************************
 Functions to build elements
 ***************************/

//function to clear a viewer element of its data:
const domClear = (elementID) => {document.getElementById(elementID).innerHTML = ''}

//function to build summary element 

const  = (tag, text) => {
    const newEl = document.createElement(tag);
    newEl.textContent = text
    return newEl
}

//function to build an executive summary card 
const execSummaryBuilder = (name, targetId) => {
    const targetArticle = document.querySelector(targetId) 
    const execFragment = document.createDocumentFragment()
    const newCard = document.createElement('section')
    newCard.className = "card"
    const titleContainer = document.createElement('div')
    for (key in villainDatabase[name]) {
        if (key === 'image') {
            const imgEl = document.createElement('img')
            imgEl.setAttribute('src', name[key])
            titleContainer.appendChild(imgEl)
        } else if (key === 'title') {
            const newTitle = buildTextElement('h2', '', villainDatabase[name][key])
            titleContainer.appendChild(newTitle)
        } else {
            const newFlexItem = buildTextElement('div', 'sectionElement', newCard '')
            newCard.appendChild(newFlexItem)
            const newHeading =  buildTextElement('h3', '', key)
            newflexItem.appendChild(newHeading)
            const newList = document.createElement('ul')
            name[key].forEach(
                function (currentIndex) {
                    const newListItem = buildTextElement('li', '', currentIndex)
                    newList.appendChild(newListItem)
                })
            newflexItem.appendChild(newList)
        }
    }
    execFragment.appendChild(newCard)
    targetArticle.appendChild(execFragment)
}








/**********************
 Functions to View data
 *********************/

 






//Some new villain data:

//Morocco Mole
// summary:
// 'https://vignette.wikia.nocookie.net/hanna-barbera/images/2/2c/Moroccomole.jpg/revision/latest/scale-to-width-down/250?cb=20130511184743', 'USA', ['Secret Squirrel', 'Double Q', 'Purple Fedora'], ['the mole', 'the sidekick', 'the fez']

 //rap sheet :['bad fashion sense', 'monocle abuse', 'fez tilting'], ['tax evasion', 'domestic terrorism', 'aiding and abetting'], ['alcatraz', 'Rikers', 'superMax'], ['Secret Squirrel'], ['literally no one']

// finInt: [0000023, 00000000123, 53245234523, 234534564563], ['Fez Mart', 'Monocle World', 'Faux Mole Pelts'], [''] 



// look up villain and display their profile

//display news feed of all villains (would be great to display in chronological order)

//display executive summaries of all villains