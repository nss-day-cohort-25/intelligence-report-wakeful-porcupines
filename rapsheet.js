const retrievedRapSheetDataBase = JSON.parse(localStorage.getItem("rapSheet"));

const rapSheetArticle = document.getElementById("rapsheet")
const indexGetter = document.getElementById("profileViewer")

const addRapSheetToDom = () => {
    const rapsheetElement = document.createElement("section");
    rapsheetElement.classList = "card rapsheet";
    const header = document.createElement("h2");
    header.textContent = "Rap Sheet";
    rapsheetElement.appendChild(header);

    for (property in retrievedRapSheetDataBase) {
        const sectionElement = document.createElement("div");
        const propertyHeading = document.createElement("h3")
        propertyHeading.textContent = property + ":";
        sectionElement.appendChild(propertyHeading)
        const listElement = document.createElement("ul");

        for (item in retrievedRapSheetDataBase[property]){
            const listItem = document.createElement("li")
            listItem.textContent = retrievedRapSheetDataBase[property][item];
            listElement.appendChild(listItem);
        }
        
        sectionElement.appendChild(listElement);
        rapsheetElement.appendChild(sectionElement);
    }
    rapSheetArticle.appendChild(rapsheetElement);
}

// const execSummaryBuilder = (name) => {
//     const targetArticle = document.querySelector('#profileViewer') 
//     const execFragment = document.createDocumentFragment()
//     const newCard = document.createElement('section')
//     newCard.className = "card"
//     const titleContainer = document.createElement('div')
//     for (key in name) {
//         if (key === 'image') {
//             const imgEl = document.createElement('img')
//             imgEl.setAttribute('src', name[key])
//             titleContainer.appendChild(imgEl)
//         } else if (key === 'name') {
//             const newName = document.createElement('h2')
//             newName.textContent = name[key]
//             titleContainer.appendChild(newName) 
//             newCard.appendChild(titleContainer)
//         } else {
//             const newflexItem = document.createElement('div')
//             newflexItem.className = "sectionElement"
//             newCard.appendChild(newflexItem)
//             const newHeading = document.createElement("h3")
//             newHeading.textContent = key
//             newflexItem.appendChild(newHeading)
//             const newList = document.createElement('ul')
//             name[key].forEach(
//                 function (currentIndex) {
//                     const newListItem = document.createElement('li')
//                     newListItem.textContent = currentIndex
//                     newList.appendChild(newListItem)
//                 })
//             newflexItem.appendChild(newList)
//         }
//     }
//     execFragment.appendChild(newCard)
//     targetArticle.appendChild(execFragment)
// }

execSummaryBuilder(retrievedRapSheetDataBase, '#rapsheet');

// addRapSheetToDom()