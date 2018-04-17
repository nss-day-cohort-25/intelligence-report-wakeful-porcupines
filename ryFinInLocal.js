const finDatabase = JSON.parse(localStorage.getItem('financialCrimes'))

const financeArticle = document.querySelector("#financeProfileViewer")

const fragment = document.createDocumentFragment()



//Function to build a summary card.

const summaryCardBuilder = (name) => {
    const newCard = document.createElement("section")
    // give the newCard section a class name of card
    newCard.className = "card"
    for(key in name) {
        if (key === "name"){
            const newHeading = document.createElement("h3")
            newHeading.textContent = database[key]
            newCard.appendChild(newName)
        } else {
            const newValue = document.createElement("h3")
            newValue.textContent = key
            newCard.appendChild(newValue)
            const newList = document.createElement("ul")
            name[key].forEach(
                function(currentIndex){
                    const newListItem = document.createElement("li")
                    newListItem.textContent = currentIndex
                    newList.appendChild(newListItem)
                })
            newCard.appendChild(newList)
        }
    }
    fragment.appendChild(newCard)
}

summaryCardBuilder(finDatabase)

financeArticle.appendChild(fragment)



//document.querySelector("#financialInterests").appendChild(fragment)
/* Create a function that make a section 

*/

/*
// Creating a bank account h3 heading
const bankAccounts = document.createElement("h3")
//Add a class
bankAccounts.classList = "fin__ListOfAccounts"
bankAccounts.textContent = "List of Bank Accounts"
fragment.appendChild(bankAccounts)
const list = document.createElement("ul")
for (property in finDatabase["Bank Accounts"]){
    const listItem = document.createElement("li")
    listItem.textContent = finDatabase["Bank Accounts"][property]
    list.appendChild(listItem)
}
fragment.appendChild(list)


//Creating a list of businesses heading
const businessList = document.createElement("h3")
//Add a class
businessList.classList = "fin__ListOfBusinesses"
businessList.textContent = "List of Businesses"
fragment.appendChild(businessList)
const listTwo = document.createElement("ul")
for(property in finDatabase["Businesses"]){
    const listItem = document.createElement("li")
    listItem.textContent = finDatabase["Businesses"][property]
    listTwo.appendChild(listItem)
}
fragment.appendChild(listTwo)



//Creating a blackmailed by suspect heading
const blackMailed = document.createElement("h3")
//Add a class
blackMailed.classList = "fin__listOfBlackMailed"
blackMailed.textContent = "Individuals believed to have been blackmailed by suspect"
fragment.appendChild(blackMailed)
const listThree = document.createElement("ul")
for(property in finDatabase["Black Mailed"]){
    const listItem = document.createElement("li")
    listItem.textContent = finDatabase["Black Mailed"][property]
    listThree.appendChild(listItem)
}
fragment.appendChild(listThree)



//Creating a believed money laundering business heading
const moneyLaund = document.createElement("h3")
//Add a class
moneyLaund.classList = "fin__listOfMoneyLaundering"
moneyLaund.textContent = "Believed Money Laundering Business"
fragment.appendChild(moneyLaund)
const listFour = document.createElement("ul")
for(property in finDatabase["Money Laundering Businesses"]){
    const listItem = document.createElement("li")
    listItem.textContent = finDatabase["Money Laundering Businesses"][property]
    listFour.appendChild(listItem)
}
fragment.appendChild(listFour)
*/


/* Future section
document.querySelector("#profileViewer").appendChild(fragment)
*/