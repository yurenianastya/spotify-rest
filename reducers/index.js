import { combineReducers } from "redux";

import SongReducer from './SongReducer';

const rootReducer = combineReducers({
    songsList:SongReducer
})

export default rootReducer;