import Axios from 'axios'

const config = {
  baseURL: '',
  timeout: 1000
}

const instance = Axios.create(config)

instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem("token");
    config.headers.common["Authoriaztion"] = "Bearer " +token;
    return config;
}, function (error) {
    return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});

export default {
    get (url, param) {
        return new Promise((resolve, reject) => {
            instance.get(url, {
                param: param
            }).then(res => {
                resolve(res);
            }).catch(err => {
                console.log(err, '异常')
            })
        })
    },

    post (url, param) {
        return new Promise((resolve, reject) => {
            instance.post(url, {
                data: param
            }).then(res => {
                resolve(res);
            }).catch(err => {
                console.log(err, '异常')
            })
        });
    }
}

