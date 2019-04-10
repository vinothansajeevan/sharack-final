import postSource from './source';

export function fetchPost() {
    return {
        type: 'FETCH_POST',
        payload: postSource.fetchPost()
    }
}

export function setPost(setPost) {
        return{type: 'SET_POST_REQ', payload:setPost};
}


export function mutatePost(request) {

    return function (dispatch) {
        dispatch({
            type: 'MUTATE_POST',
            payload: postSource.createPost(request)
        });
    }
}