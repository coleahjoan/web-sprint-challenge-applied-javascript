// STEP 2: Create tabs
// -----------------------
//x Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
//x Once the data is resolved use console logs or breakpoints to review the structure.
//x Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//x  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

import axios from 'axios';
const topics = document.querySelector('.topics');
axios.get('https://lambda-times-backend.herokuapp.com/topics')

.then((res) => {
    const trendingTopics = res.data.topics
    console.log(res)
    trendingTopics.forEach(element => {
        topics.appendChild(makeTab(element))
        console.log(element)
    });
    
})
.catch((err) => {
    console.log('error!', err)
})

function makeTab(topic){
    const tabs = document.createElement('div')
    tabs.classList.add('tab')
    tabs.textContent = topic
    return tabs
}
makeTab();
