import fetch from 'node-fetch';

async function getSubmissions() {
    const API_KEY = '642a1607f9fd2a7de4401d441c953b03';
    const FORM_ID = '220321541110433';
    const url = `https://api.jotform.com/form/${FORM_ID}/submissions?apiKey=${API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();
    return data.content;
}

export  {getSubmissions};