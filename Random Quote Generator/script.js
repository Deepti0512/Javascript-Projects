const quoteText = document.querySelector(".quote");
const quoteBtn = document.querySelector("button");
const authorName = document.querySelector(".author .name");
const soundBtn = document.querySelector(".speech");
const copyBtn = document.querySelector(".copy");
const twitterBtn = document.querySelector(".twitter");

const apiUrl = "https://api.quotable.io/random";

//function to get random quote from api using javascript fetch 
function randomQuote(){
    quoteBtn.innerText = "Loading Quote...";
    quoteBtn.classList.add("loading");
    fetch(apiUrl).then(res=>res.json()).then(result => {
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("loading");
    });
}

//generating speech request from web speech api
soundBtn.addEventListener("click",()=>{
    //using SpeechSynthesisUtterence web speech api 
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance);
})

//copy quote to clipboard
copyBtn.addEventListener("click",()=>{
    //writeText() property writes the specified text string to the system clipboard
    navigator.clipboard.writeText(quoteText.innerText);
    console.log(navigator.clipboard);
})

twitterBtn.addEventListener("click",()=>{
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl,"_blank");
})

quoteBtn.addEventListener("click",randomQuote);