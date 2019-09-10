import * as types from './actionTypes';

import * as authorApi from '../../api/authorApi';
import { beginApiCall, apiCallError } from './apiStatusActions';


export function loadAuthorsSuccess(authors) {
    return { type: types.LOAD_AUTHORS_SUCCESS, authors }
}

export function loadAuthors() {
    return async function (dispach) {
        dispach(beginApiCall())
        return authorApi.getAuthors().then(authors => {
            dispach(loadAuthorsSuccess(authors));
        }).catch(error => {
            dispach(apiCallError(error))
            throw error;
        });
    };
}