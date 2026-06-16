import axios from "axios";

export default axios.create ({
    baseURL: 'https://api.rawg.io/api',
    params: {
    key: '28a7514320d14d658323cc44f54a4e92'
    }  
})