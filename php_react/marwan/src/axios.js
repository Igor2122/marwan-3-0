import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.instagram.com/v1/users/self/media'
});

instance.defaults.headers.common['Authorization'] = '285502478.8001032.48720ae4588d48c9be566f37274a24ff';

// instance.interceptors.request...  we can set up our own interceptors 

export default instance;