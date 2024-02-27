import axios from 'axios';

const userInstance= axios.create({
    baseURL:'http://localhost:4005',
   
})
export {userInstance};
