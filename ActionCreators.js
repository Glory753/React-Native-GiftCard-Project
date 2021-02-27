import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const fetchGiftcards = () => dispatch => {

    dispatch(giftcardsLoading());

    return fetch(baseUrl + 'giftcards')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(giftcards => dispatch(addGiftcards(giftcards)))
        .catch(error => dispatch(giftcardsFailed(error.message)));
};

export const giftcardsLoading = () => ({
    type: ActionTypes.GIFTCARDS_LOADING
});

export const giftcardsFailed = errMess => ({
    type: ActionTypes.GIFTCARDS_FAILED,
    payload: errMess
});

export const addGiftcards = giftcards => ({
    type: ActionTypes.ADD_GIFTCARDS,
    payload: giftcards
});

export const fetchAdvertisements = () => dispatch => {
    
    dispatch(advertisementsLoading());

    return fetch(baseUrl + 'advertisements')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(advertisements => dispatch(addAdvertisements(advertisements)))
        .catch(error => dispatch(advertisementsFailed(error.message)));
};

export const advertisementsLoading = () => ({
    type: ActionTypes.ADVERTISEMENTS_LOADING
});

export const advertisementsFailed = errMess => ({
    type: ActionTypes.ADVERTISEMENTS_FAILED,
    payload: errMess
});

export const addAdvertisements = advertisements => ({
    type: ActionTypes.ADD_ADVERTISEMENTS,
    payload: advertisements
});
