import { redirectIfLoggedIn, signInUser, signupUser, fetchPost } from '../fetch-utils.js';

const signInForm = document.getElementById('sign-in');
const signInEmail = document.getElementById('sign-in-email');
const signInPassword = document.getElementById('sign-in-password');

const signUpForm = document.getElementById('sign-up');
const signUpEmail = document.getElementById('sign-up-email');
const signUpPassword = document.getElementById('sign-up-password');

redirectIfLoggedIn();
signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const user = await signupUser(signUpEmail.value, signUpPassword.value);
    if (user) {
        redirectIfLoggedIn();
    } else {
        console.error(user);
    }

    signInForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const user = await signInUser(signInEmail.value, signInPassword.value);
        if (user) {
            redirectIfLoggedIn();
        } else {
            console.error(user);
        }
    });
});

async function onLoad() {
    const data = await fetchPost();
    const myPost = data[0];
    const createdAt = new Date(myPost.created_at);
    console.log(createdAt.toLocaleDateString());
    const now = new Date();
    console.log(now.toLocaleDateString());
}

onLoad();
