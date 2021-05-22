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

const getServiceCats = () => {
    return apiGet("get_service_cats");
};

const getServices = (id) => {
    return apiGet("get_services?category="+id)
}

const getService = (id) => {
    return apiGet("get_service?id="+id)
}

const getProducts = () => {
    return apiGet("get_products")
}

const getProduct = (id) => {
    return apiGet("get_product?id="+id)
}

const getPartners = () => {
    return apiGet("get_partners");
};

const getPortfolio = (count=false) => {
    let url = "get_portfolio";
    if (count) {url+=("?count="+count);};
    return apiGet(url);
};

const getCase = (id) => {
    return apiGet("get_case?id="+id);
};

const getFooterSidebar = () => {
    return apiGet("get_footer_sidebar");
};

const getContacts = () => {
    return apiGet("get_contacts");
};

const sendQuestion = () => {
    return apiGet("send_question");
};




const API = {
    url:url,
    getMenu,
    getServiceCats,
    getServices,
    getService,
    getProducts,
    getProduct,
    getPortfolio,
    getCase,
    getPartners,
    getFooterSidebar,
    getContacts,
    sendQuestion
};

const ce = {API,getUrl};

export default ce;