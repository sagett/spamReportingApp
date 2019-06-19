import reducer from '../reducer/index';
import { RECIEVE_INITIAL_DATA, UPDATE_REPORT_STATE } from '../action/index';

const givenState = {
    reports: [],
    routing: { "locationBeforeTransitions": null }
};

describe('A Test Suite on report reducer', () => {
    it('Given emply action state: should have initial state', () => {
        expect(reducer(givenState, {})).toEqual(givenState);
    });

    it('Given not recognized action type: should not affect any state change', () => {
        expect(reducer(givenState, { type: 'NOT_EXISTING' })).toEqual(givenState);
    });

    it('FETCH_ALL_REPORT: should affect state change with response data', () => {
        let responseDataMock = [{
            "reference_id": "0103e005-b762-485f-8f7e-722019d4f302",
            "status": "RESOLVE",
            "message": "",
            "source": "",
            "report_type": "SPAM"
        }]

        let expectedState = {
            reports: responseDataMock,
            routing: { "locationBeforeTransitions": null }
        }

        expect(reducer(
            givenState,
            { type: RECIEVE_INITIAL_DATA, data: responseDataMock })
        ).toEqual(expectedState);
    });

    it('BLOCK_REPORT: should not affect any state change', () => {
        expect(reducer(
            givenState,
            { type: UPDATE_REPORT_STATE })
        ).toEqual(givenState);
    });
});
