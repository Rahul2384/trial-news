let newsHtml = "";
let fetchbtn = document.getElementById('fetchbtn');
const searchFrom = document.querySelector('.search');
const input = document.querySelector('.input');
searchFrom.addEventListener('submit', retrieve);

function retrieve(e) {
    e.preventDefault();
    let apikey = 'eaf8b694a94248c9bcdc5413fda33b97';
    let topic = input.value;
    console.log(topic);
    // let link = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apikey}`;
    let link = `https://gnews.io/api/v4/search?q=${topic}&apikey=38695d8952ef282ec443183186a4ed47`;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', link, true);
    console.log(xhr);
    console.log(link);
    // xhr.open('GET', `https://newsapi.org/v2/everything?q=bitcoin&apiKey=013ef9b742c64d74825fa128d2c2ebd3`, true);

    xhr.onload = function () {
        console.log("inside");
        if (this.status === 200) {
            let json = JSON.parse(this.responseText)
            let articles = json.articles;
            console.log(articles);
            let newsHtml = "";
            articles.forEach(function (element, index) {
                if (element["content"] != null && element["image"] != null) {
                    let news = ` <div class="accordion" id="newsAccordion" >
                                            <img src="${element["image"]}" alt="" width="500px">
                                            <div class="card-body">
                                                <b class="card-title">${element["title"]}</b>
                                                <b>Content</b><p class="card-text">${element["content"]}.</p>
                                                <b class = "published">Published At</b> : ${element["publishedAt"]}
                                                <a href="${element['url']}" target="_blank" class="button btn-primary">Read more here</a>
                                                <hr>
                                            </div>
                                </div>`;
                    newsHtml += news;
                }
            });
            newsAccordion.innerHTML = newsHtml;
        }
        else {
            console.log("Some error occured")
        }

    }
    xhr.send()
}
