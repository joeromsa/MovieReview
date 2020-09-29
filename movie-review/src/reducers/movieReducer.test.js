import movieReducer from './movieReducer'

describe('movieReducer', () => {

    test('returns new state with action NEW_MOVIE_REVIEW', () => {
        const state = [];
        const action = {
            type: 'NEW_MOVIE_REVIEW',
            data: {
                title: 'Alien',
                rating: '4.25',
                year: '1979',
                id: 1
            }
        }

        const newState = movieReducer(state, action);

        expect(newState).toHaveLength(1);
        expect(newState).toContainEqual(action.data);
    });

    test('returns new state with action EDIT_RATING', () => {
        const state = [
            {
                title: 'Alien',
                rating: '4.25',
                year: '1979',
                id: 1
            },
            {
                title: 'Blade Runner',
                rating: '3.75',
                year: '1982',
                id: 2
            }
        ];

        const action = {
            type: 'EDIT_RATING',
            data: {
                rating: '4',
                id: 2
            }
        }

        const newState = movieReducer(state, action);

        expect(newState).toHaveLength(2);
        expect(newState).toContainEqual(state[0]);
        expect(newState).toContainEqual({ title: 'Blade Runner', rating: '4', year: '1982', id: 2});
    });

    test('returns new state with action REMOVE_MOVIE_REVIEW', () => {
        const state = [
            {
                title: 'Alien',
                rating: '4.25',
                year: '1979',
                id: 1
            },
            {
                title: 'Blade Runner',
                rating: '3.75',
                year: '1982',
                id: 2
            }
        ];
        const action = {
            type: 'REMOVE_MOVIE_REVIEW',
            data: {
                id: 1
            }
        }

        const newState = movieReducer(state, action);

        expect(newState).toHaveLength(1);
        expect(newState).toContainEqual(state[1]);
    });
});