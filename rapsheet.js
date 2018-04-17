const retrievedRapSheetDataBase = JSON.parse(localStorage.getItem("rapSheet"));

const rapSheetDiv = document.getElementById("rapsheet")

const addRapSheetToDom = () => {
    const rapsheetElement = document.createElement("article");
    const header = document.createElement("h2");
    header.textContent = "Rap Sheet";
    rapsheetElement.appendChild(header);

    for (property in retrievedRapSheetDataBase) {
        const sectionElement = document.createElement("section");
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
    rapSheetDiv.appendChild(rapsheetElement);
}


addRapSheetToDom()