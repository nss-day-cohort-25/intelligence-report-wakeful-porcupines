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
    },
    {
        event: "Political Rival Slandered",
        Date: "April 1st, 2018",
        Likelihood: 8,
        Type: "Smear Campaign",
        Victims: "B. Rubble",
        Witnesses: "F. Flintstone",
        Investigated: "NSA"
}]

localStorage.setItem("newsDB", JSON.stringify(newsDataBase));