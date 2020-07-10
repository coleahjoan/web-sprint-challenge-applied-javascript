// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then((res) => {
    console.log(res)
    const articles = res.data.articles
    const cards = document.querySelector('.cards-container')
    for(let object in articles){
        articles[object].forEach(element => {
            cards.appendChild(cardMaker(element))
        });
    }
})
//create a card function
function cardMaker(object){
    //create elements
    const card = document.createElement('div')
    const text = document.createElement('div')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    const imgSrc = document.createElement('img')
    const name = document.createElement('span')
    // console.log(object)
    // console.log(card)
    // add text/images to elements
    text.textContent = object.headline
    console.log(text.textContent)
    imgSrc.src = object.authorPhoto
    name.textContent = object.name
    // add class name to elements
    card.className = 'card'
    text.className = 'headline'
    author.className = 'author'
    imgContainer.className = 'img-container'
    //put elements on to card
    card.appendChild(text)
    card.appendChild(author)
    author.appendChild(imgContainer)
    imgContainer.appendChild(imgSrc)
    author.appendChild(name)
//listener event to console on click
    card.addEventListener('click', () => {
        console.log(object.headline)
    })
    return card
}

