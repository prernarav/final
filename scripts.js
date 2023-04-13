const form = document.getElementById('article-form');
const articleList = document.getElementById('article-list');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // prevent form from submitting and refreshing the page
  
  // get the values from the form
  const title = document.getElementById('article-title').value;
  const author = document.getElementById('article-author').value;
  const content = document.getElementById('article-content').value;

  // create a new article element
  const article = document.createElement('article');
  const articleTitle = document.createElement('h3');
  const articleAuthor = document.createElement('p');
  const articleContent = document.createElement('p');

  // set the values for the new article element
  articleTitle.textContent = title;
  articleAuthor.textContent = `By ${author}`;
  articleContent.textContent = content;

  // append the article elements to the article element
  article.appendChild(articleTitle);
  article.appendChild(articleAuthor);
  article.appendChild(articleContent);

  // append the article element to the article list
  articleList.appendChild(article);

  // clear the form
  form.reset();
});
