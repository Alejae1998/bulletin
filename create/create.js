import { createNewPost } from '../fetch-utils.js';

const form = document.getElementById('new-post');


form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const newPost = {
        tittle: data.get('tittle'),
        description: data.get('description'),
        contact: data.get('contact'),
    };
    const resp = await createNewPost(newPost);
});

