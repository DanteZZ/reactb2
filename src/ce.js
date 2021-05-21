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

const getPartners = () => {
    return apiGet("get_partners");
};

const getPortfolio = (count=false) => {
    let url = "get_portfolio";
    if (count) {url+=("?count="+count);};
    return apiGet(url);
};

const getFooterSidebar = () => {
    return apiGet("get_footer_sidebar");
};

const API = {
    url:url,
    getMenu,
    getServicesOnly,
    getPortfolio,
    getPartners,
    getFooterSidebar
};

const ce = {API,getUrl};

export default ce;