//api.js api data fetcher

import axios from 'axios';


// Create a new Axios instance
const myAxios = axios.create(
    {baseURL: 'http://localhost:8080/api'}
);

function getMyAxios() {
    return myAxios
}

// Function to remove the Authorization header
const removeAuthorizationHeader = () => {
    //todo: ????
    delete myAxios.defaults.headers.common['Authorization'];
};

// Function to set the Authorization header with a token
const setAuthorizationHeader = () => {

    if (localStorage.getItem('jwt')) {
        myAxios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('jwt')}`;
        console.log()
    }
};

// Export the Axios instance and functions
export {myAxios, removeAuthorizationHeader, setAuthorizationHeader, getMyAxios};
