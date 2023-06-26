import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'adc9bb1782b74460b98ee361399c8554'
    }
})