import createMain from './about.js'
import createMenu from './menu.js'
import createContact from './contact.js'

let content = document.getElementById('content');
const tab1 = document.getElementById('tab1');
const tab2 = document.getElementById('tab2');
const tab3 = document.getElementById('tab3');

function changeContent(){

    while (content.hasChildNodes()) {
        content.removeChild(content.lastChild);
    }

    if (tab1.checked) {
        return content.append(createMain());
    }

    else if (tab2.checked){
        return  content.append(createMenu())
    }

    else if (tab3.checked){
        return   content.append(createContact())
    }
}


const tabs = document.querySelectorAll('.tabs');
tabs.forEach((input) => {
input.addEventListener('click', changeContent)}) ;

changeContent()