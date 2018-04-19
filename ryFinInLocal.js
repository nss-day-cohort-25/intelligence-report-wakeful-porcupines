const finDatabase = JSON.parse(localStorage.getItem('financialCrimes'))

execSummaryBuilder(finDatabase, "#financeProfileViewer")

// const financeArticle = document.querySelector("#financeProfileViewer")

// const fragment = document.createDocumentFragment()



// //Function to build a summary card.

// const summaryCardBuilder = (name) => {
//     const newCard = document.createElement("section")
//     newCard.classList = "card ryFinIn" 
//     const mainHeading = document.createElement("h2")
//     mainHeading.textContent = "Financial Information"
//     newCard.appendChild(mainHeading)
//     for(key in name) {
//         if (key === "name"){
//             const newHeading = document.createElement("h3")
//             newHeading.textContent = database[key]
//             newCard.appendChild(newName)
//         } else {
//             const finDiv = document.createElement("div")
//             finDiv.classList = "finDiv"
//             const newValue = document.createElement("h3")
//             newValue.textContent = key
//             const newList = document.createElement("ul")
//             name[key].forEach(
//                 function(currentIndex){
//                     const newListItem = document.createElement("li")
//                     newListItem.textContent = currentIndex
//                     newList.appendChild(newListItem)
//                 })
//                 //Adds the new list to the card
//             finDiv.appendChild(newValue)
//             finDiv.appendChild(newList)
//             newCard.appendChild(finDiv)
//         }
//     }
//     // Adds the card components to the fragment
//     fragment.appendChild(newCard)
// }
// //Calls the function with finDatabase called too it
// summaryCardBuilder(finDatabase)


// //Appending child fragment to the finance article
// financeArticle.appendChild(fragment)


//Original Code
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