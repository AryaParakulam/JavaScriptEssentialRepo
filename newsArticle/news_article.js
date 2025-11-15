var xhrnews = new XMLHttpRequest();

var url ="./news_article.json";

xhrnews.open('GET',url,true);

xhrnews.responseType = 'json';

xhrnews.onload = function(){
    var news = xhrnews.response.news;
    vardiv = document.getElementById('articles');
    news.forEach(function(newsArticle) {
        var newsDiv = document.createElement('div');
        newsDiv.classList.add('news');
  
        var headline = document.createElement('h2');
        headline.textContent = newsArticle.headline;

        var content = document.createElement('p');
        content.textContent = newsArticle.content;

        newsDiv.appendChild(headline);
        newsDiv.appendChild(content);
        vardiv.appendChild(newsDiv)
    });

}
xhrnews.send();