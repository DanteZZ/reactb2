const axios = require('axios').default;
const url = "http://b2lab.ru/";
const apiUrl = "http://b2lab.ru/localapi/";

const getUrl = function(path) {
    return "http://b2lab.ru"+path;
};

/* API */
const apiGet = function(path="") {
    return axios.get(apiUrl+path);
};
const getMenu = () => {
    return apiGet("get_menu");
};

const API = {
    url:url,
    getMenu
};

const ce = {API,getUrl};

export default ce;