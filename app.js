// import functions and grab DOM elements
import { checkAuth, fetchPost, getUser, logout } from './fetch-utils.js';
import { renderPostIt } from './render-utils.js';

// let state
loadData();

const logInButton = document.getElementById('log-in');
const createButton = document.getElementById('create-button');
const bulletin = document.getElementById('bulletin-board');

window.addEventListener('load', async () => {
    const user = await getUser();


    if (user) {
        logInButton.addEventListener('click', logout);
        logInButton.textContent = 'Logout';
    } else {
        logInButton.addEventListener('click', () => {
            location.replace('/second-page');
        });
        logInButton.textContent = 'Login';
    }

    createButton.addEventListener('click', () => {
        const user = checkAuth();
        if (user) window.location.href = '/create';
        location.replace('/create');
    });
    
    
    const posts = await fetchPost();
    for (let post of posts) {
        const postDiv = renderPostIt(post);
        bulletin.append(postDiv);
    }
});

async function loadData() {
    const posts = await fetchPost();
    for (let post of posts) {
        const postDiv = renderPostIt(post);
        bulletin.append(postDiv);

    }
}


// logInForm.addEventListener('submit', async (e) => {
    // e.preventDefault();
//     location.replace('/second-page');
// });

// createForm.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     location.replace('/second-page');
// });

// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state
