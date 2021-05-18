import {createStore} from "redux";
import FullLoaderReducer from "./Reducer";

const FullLoaderStore = createStore(FullLoaderReducer);

export default FullLoaderStore;