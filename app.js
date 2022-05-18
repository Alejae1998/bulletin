// import functions and grab DOM elements
import { getPosts, getUser, logout } from './fetch-utils.js';
import { renderPostIt } from './render-utils.js';

// let state

const logInButton = document.getElementById('log-in');
const createButton = document.getElementById('create-button');
const bulletin = document.getElementById('bulletin-board');

window.addEventListener('load', async () => {
    const user = await getUser();
    console.log(user);

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
        location.replace('/create');
    });

    const posts = await getPosts();
    for (let post of posts) {
        const postDiv = renderPostIt(post);
        bulletin.append(postDiv);
    }
});





// logInForm.addEventListener('submit', async (e) => {
//     e.preventDefault();
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
