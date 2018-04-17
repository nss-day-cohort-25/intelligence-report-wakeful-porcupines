const newsDataBase = [
    {
        event: "Horse Doping Ring Exposed",
        Date: "April 2nd, 2018",
        Likelihood: 5,
        Type: "Leak",
        Victims: "National Jockeys Association",
        Witnesses: "Atom Ant",
        Investigated: "CIA"
    }, 
    {
        event: "Death of Famous Mystery Solving Teen and Pet",
        Date: "April 7th, 2018",
        Likelihood: 10,
        Type: "Assasination",
        Victims: "Norville \"Shaggy\" Rogers, S. Doo",
        Witnesses: "Fred Jones, Daphne Blake",
        Investigated: "FBI"
    }]

localStorage.setItem("newsDB", JSON.stringify(newsDataBase));