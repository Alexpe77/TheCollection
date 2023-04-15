    const main = document.querySelector("main");
    let card = document.querySelector('main');
carCollection.forEach((index) => {

    let article = document.createElement('article');
    let description = document.createElement('p');
    description.textContent = index.description;
    let picture = document.createElement('section');
    picture.style.backgroundImage = index.picture;
    let title = document.createElement('h2');
    let titleText = document.createTextNode(index.manufacturer);
    let paragraph = document.createElement('h3');
    let paragraphText = document.createTextNode(index.model);
    let list = document.createElement('h4');
    let listText = document.createTextNode(index.engine);

    title.appendChild(titleText);
    paragraph.appendChild(paragraphText);

    card.appendChild(article);
        article.appendChild(title);
        article.appendChild(paragraph);
        article.appendChild(list);
        list.appendChild(listText); 
        article.appendChild(picture);
        article.appendChild(description);
        

});
