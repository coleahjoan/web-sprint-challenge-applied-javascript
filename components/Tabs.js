// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element
// 
//gather data for tabs
import axios from 'axios';
const topics = document.querySelector('.topics');
axios.get('https://lambda-times-backend.herokuapp.com/topics')
//loop through data for tabs
.then((res) => {
    const trendingTopics = res.data.topics
    console.log(res)
//loop through topics to make element into a tab, then append to topics
    trendingTopics.forEach(element => {
        topics.appendChild(makeTab(element))
        console.log(element)
    });
    
})
// .catch((err) => {
//     console.log(err)
// })
//create tabs
function makeTab(topic){
    //declare 'div' as tabNames
    const tabNames = document.createElement('div')
    //give tabNames a div
    tabNames.className = 'tab'
    tabNames.textContent = topic
    return tabNames
}
makeTab();