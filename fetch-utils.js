const SUPABASE_URL = 'https://iunwdtvnyfagysjwguun.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1bndkdHZueWZhZ3lzandndXVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIyODU4OTQsImV4cCI6MTk2Nzg2MTg5NH0.CfqXGd7NFGJGUzPx4v2oZGFHZXj4mWe7rp7FFmI2YHA';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// export  function getUser()
export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function checkAuth() {
    const user = await getUser();
    if (!user) location.replace('/create');
    console.log(user);
    // if (!user) location.replace('/second-page');
}

export async function redirectIfLoggedIn() {
    if (await getUser()) {
        location.replace('/');
    }
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '/');
}

function checkError({ data, error }) {

    return error ? console.error(error) : data;
}

export async function fetchPost() {
    const resp = await client.from('bulletin_board').select('*');

    return checkError(resp);
}

export async function createPost(post) {
  
    const resp = await client.from('bulletin_board').insert(post);
    console.log(resp);
    return resp.data;
    
}

// export async function redirectIfLoggedIn() {
//     location.replace('/second-page');
// }

// export async function signupUser(email, password) {
//     const response = await client.auth.signUp({ email, password });
//     if (response.user) {
//         return response.user;
//     }
// }

// export async function signInUser(email, password) {
//     const response = await client.auth.signIn({ email, password });
//     return response.user;
// }

// export async function checkAuth() {
//     const user = getUser();

//     if (!user) location.replace('/create');
// }

// export async function fetchPosts() {
//     const response = await client.from('post').select('*');
//     return response.data;
// }

// export async function createNewPost(post) {
//     const response = await client.form('post').insert(post);
//     if (response.data) {
//         return response.data;
//     } else {
//         console.error(response.error);
//     }
// }
// export async function logout() {
//     await client.auth.signOut();
//     return (window.location.href = '/');
// }
// export async function fetchPost() {
//     const response = await client.form('post').select('*');
//     return response.data;
// }
// export async functions signUp and signIn
// export async check auth
