// // https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=013ef9b742c64d74825fa128d2c2ebd3

// let category = 'business';
// let apikey = '013ef9b742c64d74825fa128d2c2ebd3';
// let newsAccordion = document.getElementById('newsAccordion');

// const xhr = new XMLHttpRequest();
// xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apikey=${apikey}`, true);

// xhr.onload = function () {
//     if(this.status === 200){
//         let json = JSON.parse(this.responseText)
//         let articles = json.articles;
//         console.log(articles);
//         let newsHtml = "";
//         articles.forEach(function(element, index){
//             // console.log(element, index)
//             let news = `<div class="card">
//                             <div class="card-header" id="heading${index}">
//                                 <h2 class="mb-0">
//                                     <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
//                                         aria-expanded="true" aria-controls="collapse${index}">
//                                         <b>Breaking News ${index+1} : </b>${element["title"]}    <b>Published At : ${element["publishedAt"]} : </b>
//                                         <hr> <img src="${element["urlToImage"]}" alt="" width="500px">
//                                     </button>
//                                 </h2>
//                             </div>

//                             <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
//                                 data-parent="#newsAccordion">
//                                 <div class="card-body"> ${element["content"]}. <a href ="${element['url']}" target="_blank"> Read more here</a></div>
//                             </div>
//                         </div>`;
//             newsHtml += news;
//         }); 
//         newsAccordion.innerHTML = newsHtml;
//     }
//     else{
//         console.log("Some error occured")
//     }
// }

// xhr.send()

// console.log("This is my index js file");
// 013ef9b742c64d74825fa128d2c2ebd3

// 013ef9b742c64d74825fa128d2c2ebd3
// https://newsapi.org/v2/top-headlines?sources=bbc-news&apikey=013ef9b742c64d74825fa128d2c2ebd3

let category = 'business'
let apikey = 'eaf8b694a94248c9bcdc5413fda33b97';
let newsAccordion = document.getElementById('notes');

const xhr = new XMLHttpRequest();
// xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apikey=${apikey}`, true);
xhr.open('GET', `https://gnews.io/api/v4/top-headlines?category=business&apikey=38695d8952ef282ec443183186a4ed47`, true);

// xhr.open('GET', `https://newsapi.org/v2/everything?q=bitcoin&apiKey=013ef9b742c64d74825fa128d2c2ebd3`, true);

xhr.onload = function () {
    if(this.status === 200){
        let json = JSON.parse(this.responseText)
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index){
            if(element["content"]!=null && element["image"]!=null){
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
            newsHtml += news;}
        }); 
        newsAccordion.innerHTML = newsHtml;
    }
    else{
        console.log("Some error occured")
    }
}

xhr.send()










