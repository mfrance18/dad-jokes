import { jokeData } from "./jokeData.js";
import { getJokes } from "./dataManager.js";

const targetContent = document.querySelector(".jokes")


function displayJoke() { 
    getJokes().then(joke => targetContent.innerHTML = jokeData(joke))
}

document.querySelector("#displayButton").addEventListener("click",(event) => displayJoke(event))

