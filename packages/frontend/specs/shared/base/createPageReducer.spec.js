import { createPageReducer } from '../../../src/shared/base';

describe('createPageReducer', () => {
    const pageName = 'TestPage';
    const initialState = { loading: false };
    const actionHandlers = {};

    const pageReducer = createPageReducer(pageName, initialState, actionHandlers);

    describe('should cycle LOAD_{pageName}, LOAD_{pageName}_SUCCESS, & UNLOAD_{pageName} lifecycle', () => {
        it(`LOAD_${pageName}`, () => {
            const state = pageReducer(initialState, { type: `LOAD_${pageName}` });
            expect(state).toEqual({ ...state, loading: true });
        });

        it(`LOAD_${pageName}_SUCCESS`, () => {
            const state = pageReducer(initialState, {
                type: `LOAD_${pageName}_SUCCESS`,
            });
            expect(state).toEqual({ ...state, loading: false });
        });

        it(`UNLOAD_${pageName}`, () => {
            const state = pageReducer(initialState, { type: `UNLOAD_${pageName}` });
            expect(state).toEqual({
                ...initialState,
                loading: true,
            });
        });
    });
});
