const finDatabase = JSON.parse(localStorage.getItem('financialCrimes'))

/*const loadDatabase = function (localStorageKey) {
    // Get the string version of the database
    const databaseString = localStorage.getItem(localStorageKey)

    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}*/
// Create a document fragment to contain components
const fragment = document.createDocumentFragment()


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

document.querySelector("#financialInterests").appendChild(fragment)