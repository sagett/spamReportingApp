import fetch from 'isomorphic-fetch';

export const RECIEVE_INITIAL_DATA = 'RECIEVE_INITIAL_DATA';

export const fetchInitialData = () => dispatch => {
    return fetch('http://localhost:4460/reports/')
        .then(response => response.json())
        .then(json => {
            return (dispatch(
                {
                    type: RECIEVE_INITIAL_DATA,
                    data: json
                }))
        })
};

export const UPDATE_REPORT_STATE = 'UPDATE_REPORT_STATE';

export const updateReportState = (id, payload) => dispatch => {
    return fetch('http://localhost:4460/reports/' + id + '/', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    })
        .then(response => response.json())
        .then(json => {
            dispatch({
                type: UPDATE_REPORT_STATE
            })
            dispatch(fetchInitialData())
        });
};
