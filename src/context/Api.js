import React from 'react';
const axios = require('axios').default;
const url = "http://b2lab.ru/localapi/";
const apiGet = function(path="") {
    return axios.get(url+path);
};
const getMenu = () => {
    return apiGet("get_menu");
};
export const CtxApi = React.createContext({
    url:url,
    getMenu
});