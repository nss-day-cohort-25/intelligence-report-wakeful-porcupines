const newsDB = JSON.parse(localStorage.getItem("newsDB"));

console.log(newsDB);

function makeNewsFeed (newsFeed) {
    newsFeed.forEach(e => {
        for (key in e) {
            console.log(key);
        }
        
    });
}

function addNewsToDOM (newsTag, newsInfo, newsClass) {
    const newsFragment = document.createDocumentFragment();
    let newsElement = document.createElement(newsTag)
    newsElement.classList = newsClass
    newsElement.textContent = newsInfo
    newsFragment.appendChild(newsElement)
}

makeNewsFeed(newsDB);