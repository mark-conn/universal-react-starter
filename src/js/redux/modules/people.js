import * as api from '../../api-client';

const LOAD_PEOPLE = 'LOAD_PEOPLE';
const LOAD_PEOPLE_SUCCESS = 'LOAD_PEOPLE_SUCCESS';
const LOAD_PEOPLE_FAIL = 'LOAD_PEOPLE_FAIL';

const LOAD_PERSON = 'LOAD_PERSON';
const LOAD_PERSON_SUCCESS = 'LOAD_PERSON_SUCCESS';
const LOAD_PERSON_FAIL = 'LOAD_PERSON_FAIL';

// ACTIONS

const _isLoaded = (state) => {
    return state.people && state.people.loaded;
}

export const load = () => {
    return (dispatch, getState) => {
        if (_isLoaded(getState())) {
            return;
        }
        
        dispatch({ type: LOAD_PEOPLE });
        return api.fetchPeople()
        .then(
            result => dispatch({ type: LOAD_PEOPLE_SUCCESS, result })
        )
        .catch(
            error => dispatch({ type: LOAD_PEOPLE_FAIL, error })
        );
    };
}

export const loadSingle = (slug) => {
    return (dispatch) => {
        dispatch({ type: LOAD_PERSON });
        return api.fetchPerson(slug)
        .then(
            result => dispatch({ type: LOAD_PERSON_SUCCESS, result })
        );
    };
}

// REDUCERS

const INITIAL_STATE = {
    loaded: false,
    peopleById: {}
};

/*
This module takes care of loading people data.

We export a load action creator. It dispatches a thunk that uses the API to load a page.
*/
//@TODO: implement re-fetching of possibly outdated student data

export default (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        
        case LOAD_PEOPLE:
        return {
            ...state,
            loading: true
        };
        
        case LOAD_PEOPLE_SUCCESS:
        return {
            ...state,
            loading: false,
            loaded: true,
            data: action.result,
            error: null
        };
        
        case LOAD_PEOPLE_FAIL:
        return {
            ...state,
            loading: false,
            loaded: false,
            data: null,
            error: action.error
        };
        
        
        case LOAD_PERSON_SUCCESS:
        return {
            ...state,
            peopleById: {
                ...state.peopleById,
                [action.result.id]: action.result
            }
        };
    }
    // Default
    return state;
};
