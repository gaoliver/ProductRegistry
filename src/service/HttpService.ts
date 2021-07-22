import axios from 'axios';
import _ from 'lodash';
import { Alert } from 'react-native';
import queryString from 'query-string';

axios.defaults.baseURL = 'http://localhost:3001';

function parse(path: any, params: any) {
    _.forEach(
        params,
        (value: any, key: any) =>
            (path = _.replace(path, '{' + key + '}', value))
    );

    let queryParams: any = {};

    _.forEach(params, (value: any, key: any) => {
        if (key[0] === '@') {
            const queryParamKey = _.replace(key, '@', '');
            queryParams[queryParamKey] = value;
        }
    });

    if (!_.isEmpty(queryParams)) {
        path += '?' + queryString.stringify(queryParams);
    }

    return path;
}

export default class HttpService {
    static list(path: any, params = {}, data = {}) {
        return axios
            .get(parse(path, params), { params: data })
            .then((response) => response.data)
            .catch((error) => error);
    }
}
