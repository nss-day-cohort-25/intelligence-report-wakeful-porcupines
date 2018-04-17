const newsDB = JSON.parse(localStorage.getItem("newsDB"));
const mainBody = document.querySelector("body")
const newsArt = document.createElement("article")

console.log(newsDB);

function makeNewsFeed (newsFeed) {
    const newsFragment = document.createDocumentFragment();
    newsFeed.forEach(e => {
        let createdNewsList = addNewsToDOM("ul");
        for (key in e) {
            if (key === "event") {
                let createdNewsSection = addNewsToDOM("section")
                let createdNewsElement = addNewsToDOM("h2", e[key]);
                createdNewsSection.appendChild(createdNewsElement);
                createdNewsSection.appendChild(createdNewsList)
                newsFragment.appendChild(createdNewsSection);
            } else {
                createdNewsElement = addNewsToDOM("li", e[key]);
                createdNewsList.appendChild(createdNewsElement);
            }
        }
       
    })
    return newsFragment;
}

function addNewsToDOM (newsTag, newsInfo, newsClass) {
    
    let newsElement = document.createElement(newsTag)
    if (newsClass) {
        newsElement.classList = newsClass;
    }
    newsElement.textContent = newsInfo;
    return newsElement;
}

const dbFrag = makeNewsFeed(newsDB)
newsArt.appendChild(dbFrag);
mainBody.appendChild(newsArt);