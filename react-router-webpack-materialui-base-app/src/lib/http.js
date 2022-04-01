

function request(method, url, data, opt) {
    let prm = new Promise((resolve, reject) => {
        opt = opt||{}
        !opt.headers && (opt.headers = {});
        opt.baseUrl && (url = opt.baseUrl + url);

        //** initialize the request using the method, for the given url
        let http = new XMLHttpRequest()
        http.withCredentials = true; //** send z cookies!
        http.open(method, url, true);

        http.onload = (e) => {
            let json = null;
            let err = null;
            let isJSON = false;

            err = http.status !== 200;

            try {
                let txt = http.responseText;
                let contentType = http.getResponseHeader('content-type');

                //** test if its a JSON response
                !!contentType && (isJSON = contentType.includes('application/json'));

                //** if its JSON, parse the JSON response
                if(isJSON && txt && txt.length > 0)
                    json = JSON.parse(txt);
            } catch(ex) { return reject(ex) }

            //** resolve with an object to support destructuring
            err
                ? reject({ response: http, json: json })
                : resolve({ response: http, json: json }); 
        }

        //** if we're sending an object, assume we need to send serialized json
        if(typeof(data) == 'object') {
            data = JSON.stringify(data);
            opt.headers['Content-Type'] = 'application/json';
        }

        //** if headers are present in the options, set them
        if(opt && opt.headers)
            Object
                .keys(opt.headers)
                .forEach(header => http.setRequestHeader(header, opt.headers[header]));

        //** initiate the request
        http.send(data);
    });

    return prm;
}

let http = {
    request: request,
    get: async function get(url, opt) {
        return await request('GET', url, null, opt);
    },
    post:  async function post(url, data, opt) {
        let res = await request('POST', url, data, opt);
        return res;
    },
    put:  async function put(url, data, opt) {
        let res = await request('PUT', url, data, opt);
        return res;
    },
    patch:  async function put(url, data, opt) {
        let res = await request('PATCH', url, data, opt);
        return res;
    }
};

export default http;
