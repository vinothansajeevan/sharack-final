
export default function reducer(state = {

    postList: {},
    postFetchState: 0,
    postMutateList: {},
    medicinePostState:0,
    postReq:{

    },
    error: {}



}, action) {

    switch (action.type) {

        case 'FETCH_POST_PENDING':
        {
            return {...state, postFetchState: 1}
        }
        case 'FETCH_POST_FULFILLED':
        {
            return {...state, postFetchState: 2, postList: action.payload}
        }
        case 'FETCH_POST_REJECTED':
        {
            return {...state, postFetchState: 3, error: action.payload}
        }


        case 'SET_POST_REQ': {
            return {...state, postReq: action.payload}
        }

        case 'MUTATE_POST_PENDING' : {
            return {...state, medicinePostState: 1}
        }
        case 'MUTATE_POST_FULFILLED' : {
            return {...state, medicinePostState: 2,postMutateList:action.payload}
        }
        case 'MUTATE_POST_REJECTED': {
            return {...state, medicinePostState: 3, error: action.payload}
        }

    }

    return state
}