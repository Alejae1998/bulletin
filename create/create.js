import { checkAuth, createPost, logout } from '../fetch-utils.js';

checkAuth();


const logoutbtn = document.getElementById('logout');

logoutbtn.addEventListener('click', () => {
    logout();
});

const homebtn = document.getElementById('home');
homebtn.addEventListener('click', () => {
    location.replace('/');
});


const postItForm = document.getElementById('post-it-form');

postItForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(postItForm);
    const newPost = {
        title: data.get('title'),
        description: data.get('description'),
        contact: data.get('contact'),
    };
    console.log(newPost);
    const resp = await createPost(newPost);
    console.log(resp);
});
