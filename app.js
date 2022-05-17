// import functions and grab DOM elements
import { redirectIfLoggedIn } from "./fetch-utils.js";

// let state

const logInForm = document.getElementById('log-in');
const createForm = document.getElementById('create-button');

logInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    location.replace('/auth');
});

createForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    location.replace('/auth');
});

// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state
