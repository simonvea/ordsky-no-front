import { getCloud } from './asyncfunc.js'
import * as dom from './domfunc.js'
import { transformList } from './formfunc.js'

const form = document.querySelector('form');
const submitButton = document.getElementById('klikk-meg');
const textArea = document.getElementById('words');
const wordCloudParent = document.getElementById('word-cloud');
const downloadParent = document.getElementById('download');
const listImg = document.querySelector(".list-img");
const formType = window.location.search.match(/\w+/g).join("");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    dom.addLoading(submitButton);
    let words = textArea.value;
    if(formType === "tekst") {
        words = countWords(words);
    } else if (formType === "liste") {
        words = transformList(words)
    } else {
        dom.removeLoading(submitButton);
        return
    }
    
    
    // getCloud({words})
    //     .then(cloud => {
    //         dom.appendCloud(cloud, wordCloudParent);
    //         const svg = wordCloudParent.querySelector('svg');
    //         const dataURL = svgDataURL(svg);
    //         dom.appendDowloadButton(dataURL, downloadParent);
    //         dom.removeLoading(submitButton);
    //     })
    //     .catch(err => console.error(err));
    //form.reset();
})

function toggleImgActive() {
    if(form.liste.checked) {
        listImg.classList.add('active');
    } else {
        listImg.classList.remove('active');
    } 
}

function countWords(string) {
    const regExp = /\S+/gi;
    const wordsRaw = string.toLowerCase().match(regExp);
    const words = wordsRaw.map(word => word.replace(/[.,/#!$%^&*;:{}=\-_`'´~()?]/g, "")).filter(word => word.length > 0);
    const count = {};

    if(isIterable(words)) { //checks if there are no words and throws an error if there are no words
        for (let word of words) {
            if(!count[word]) {count[word] = 1}
            else {count[word]++}
        }
    } else {throw new Error}
    
    return count
}

function isIterable(obj) {

    if (obj === null) {
        return false;
    }
    return typeof obj[Symbol.iterator] === 'function';
}



