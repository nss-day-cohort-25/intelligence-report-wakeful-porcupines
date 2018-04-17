const execSumLocal = JSON.parse(localStorage.getItem('execSum'))

const targetArticle = document.querySelector('#profileViewer') 

const execFragment = document.createDocumentFragment()

//function to build a executive summary card based on user input of name
const execSummaryBuilder = (name) => {
    const newCard = document.createElement('section')
    newCard.className = "card"
    for (key in name) {
        if (key === 'image') {
            const imgEl = document.createElement('img')
            imgEl.setAttribute('src', name[key])
            newCard.appendChild(imgEl)
        } else if (key === 'name') {
            const newName = document.createElement('h2')
            newName.textContent = name[key]
            newCard.appendChild(newName) 
        } else {
            const newflexItem = document.createElement('div')
            newflexItem.className = "sectionElement"
            newCard.appendChild(newflexItem)
            const newHeading = document.createElement("h3")
            newHeading.textContent = key
            newflexItem.appendChild(newHeading)
            const newList = document.createElement('ul')
            name[key].forEach(
                function (currentIndex) {
                    const newListItem = document.createElement('li')
                    newListItem.textContent = currentIndex
                    newList.appendChild(newListItem)
                })
            newflexItem.appendChild(newList)
        }
    }
    execFragment.appendChild(newCard)
}

execSummaryBuilder(execSumLocal)

targetArticle.appendChild(execFragment)



    





