import axios from 'axios';

export default class API {
    getData = async () => {
        let resp = await axios.get('/http://localhost:3000/');
        return resp;
    }
}