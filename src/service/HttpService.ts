import axios from 'axios';
import _ from 'lodash';

axios.defaults.baseURL = 'http://localhost:3001';

export default class HttpService {
    static async list(path: string, params = {}) {
        return axios
            .get(path, params)
            .then((response) => response.data)
            .catch((error) => error);
    }
}
