// Database of Finical Crime information
const financialCrimes = {
    'title': "Financial Interests",
    "Bank Accounts" : [10021965, 10091965, 10161965, 10231965],
    "Businesses" : [" Wolf in Cheap Cheap Clothing", "Royal Runaround", "Yellow Pinkie", "Five is a Crowd"],
    "Black Mailed" : ["Sub Swiper", "Masked Granny", "Robin Hood", "Capitan Kidd"],
    "Money Laundering Businesses" : ["Robot Rout", "The Pink Sky Mobile", "Spy in the Sky", "Ship of Spies"]
}


const saveDatabase = function(databaseObject, localStorageKey){
    /*
        Convert the Object into a string.
    */
   const stringifiedDatabase = JSON.stringify(databaseObject)

   /*
       Create a key in local storage, and store the string
       version of your inventory database as the value
   */
   localStorage.setItem(localStorageKey, stringifiedDatabase)
}

saveDatabase(financialCrimes, "financialCrimes")
