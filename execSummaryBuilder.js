const execSumLocal = JSON.parse(localStorage.getItem('execSum'))

//function to build a executive summary card based on user input of name
const execSummaryBuilder = (name, targetId) => {
    const targetArticle = document.querySelector(targetId) 
    const execFragment = document.createDocumentFragment()
    const newCard = document.createElement('section')
    newCard.className = "card"
    const titleContainer = document.createElement('div')
    for (key in name) {
        if (key === 'image') {
            const imgEl = document.createElement('img')
            imgEl.setAttribute('src', name[key])
            titleContainer.appendChild(imgEl)
        } else if (key === 'title') {
            const newName = document.createElement('h2')
            newName.textContent = name[key]
            titleContainer.appendChild(newName) 
            newCard.appendChild(titleContainer)
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
    targetArticle.appendChild(execFragment)
}


execSummaryBuilder(execSumLocal, '#profileViewer')





    





