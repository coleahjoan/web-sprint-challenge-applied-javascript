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

let headerContainer = document.querySelector('.header-container');

function header() {

    const headerDiv = document.createElement('div');
    const span1 = document.createElement('span');
    const h1 = document.createElement('h1');
    const span2 = document.createElement('span');

    headerDiv.classList.add('header');
    span1.classList.add('span1');
    span2.classList.add('span2')
    span1.textContent = 'March 28, 2020';
    h1.textContent = 'Lambda Times';
    span2.textContent = '98°';

    headerContainer.appendChild(headerDiv);
    headerDiv.appendChild(span1);
    headerDiv.appendChild(h1);
    headerDiv.appendChild(span2);
    
    return headerDiv
}
header();

