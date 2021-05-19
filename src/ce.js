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

const getServicesOnly = () => {
    return apiGet("get_services_only");
};

const API = {
    url:url,
    getMenu,
    getServicesOnly
};

const ce = {API,getUrl};

export default ce;