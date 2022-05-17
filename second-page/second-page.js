import { checkAuth, signInUser, signupUser } from '../fetch-utils.js';

const signInForm = document.getElementById('sign-in');
const signUpForm = document.getElementById('sign-up');


checkAuth();

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signInForm);
    const user = await signInUser(data.get('email'), data.get('password'));
    if (user) {
        location.replace('/create');
    }
});

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signUpForm);

    const user = await signupUser(data.get('email'), data.get('password'));
    if (user) {
        location.replace('/create');
    }
});

async function onLoad() {
    const data = await fetchPosts();
}
onLoad();

const logoutBtn = document.getElementById('logout');
logoutBtn.addEventListener('click', async () => {
    await logout();
});



// async function onLoad() {
//     const data = await fetchPost();
// }
// onLoad();
