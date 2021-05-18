import {SHOW_FULL_LOADER, HIDE_FULL_LOADER} from "../constants";

const show = () => {
    return false;
}

const hide = () => {
    return true;
}

const FullLoaderReducer = (state = false,action) => {
    if (action.type === SHOW_FULL_LOADER) {
        return show();
    }
    if (action.type === HIDE_FULL_LOADER) {
        return hide();
    }
}

export default FullLoaderReducer;