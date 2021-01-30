import { podcastReducer, podcastModalReducer } from './podcastReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    "podcast" : combineReducers({
        "filter": podcastReducer,
        "modal": podcastModalReducer
    })
});

export default rootReducer;