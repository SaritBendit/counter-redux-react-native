/*
    string | boolean | number
    object | array
*/

const state = {b: 'c', d: 'e', c: {w: 3}}
const b = {...a};
a.b = 'hello'
a.c.w = 4;
console.log('b: ', b.c.w);

// const state = {
//     session: {token: '123'},
//     app: {counter: 1}
// }

// //action creator
// function changeCount(count) {
//     return {
//         type: 'CHANGE_COUNT',
//         count
//     }
// }

// const action = changeCount(5);
// console.log('action: ', action)

// dispatch(changeCount(5));
// dispatch({
//     type: 'CHANGE_COUNT',
//     count
// })

reducer(state, action) {
    switch (action.type) {
        case 'CHANGE_COUNT':
            return {
                ...state,
            }
    }
}


