import http from './http.js';
import config from '../config.js';

//** setup the base http options
const httpCfg = {
    baseUrl: config.apiUrl
}

const api = {
    //** example, recipe
    recipe: {
        list: () => http.get('/recipe/list', httpCfg),
        create: (data) => {
            return http.post('/recipe/create', data, httpCfg);
        },
        get: (id) => {
            return http.get('/recipe/'+ id, httpCfg);
        },
        'delete': (id) => {
            return http.get('/recipe/'+ id +'/delete', httpCfg);
        },
        update: (data) => {
            return http.post('/recipe/'+ (data._id) +'/update', data, httpCfg);
        },


        units: {
            list: () => {
                return http.get('/recipe/recipe-unit/list', httpCfg);
            }
        }
    }

}

export default api;
