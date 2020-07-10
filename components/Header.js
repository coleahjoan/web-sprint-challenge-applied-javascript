// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container
// console.log('Hello World!');
console.log(document)
function Header(obj) {
    const header = document.createElement('div')
    const h1 = document.createElement('h1')
    const span1 = document.createElement('span')
    const span2 = document.createElement('span')
    h1.textContent = 'Lambda Times'
    span1.textContent = 'March 28, 2020'
    span2.textContent = '98°'
    header.appendChild(span1);
    header.appendChild(h1);
    header.appendChild(span2);
    document.getElementsByClassName('header-container')[0].appendChild(header)
    // console.log(container)
    // header.appendChild(span2);
    // return header
} 
Header('header-container');   