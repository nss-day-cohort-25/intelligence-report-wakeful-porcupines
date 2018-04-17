const newsDataBase = [
    {
        event: "Horse Doping Ring Exposed",
        date: "April 2nd, 2018",
        likelihood: 5,
        type: "Leak",
        victims: "National Jockeys Association",
        witnesses: "Atom Ant",
        Investigated: "CIA"
    }, 
    {
        event: "Death of Famous Mystery Solving Teen and Pet",
        date: "April 7th, 2018",
        likelihood: 10,
        type: "Assasination",
        victims: "Norville \"Shaggy\" Rogers, S. Doo",
        witnesses: "Fred Jones, Daphne Blake",
        Investigated: "FBI"
    }]

localStorage.setItem("newsDB", JSON.stringify(newsDataBase));