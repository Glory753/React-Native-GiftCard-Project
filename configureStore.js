import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { giftcards } from './giftcards';
import { advertisements } from './advertisements';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            giftcards,
            advertisements
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}