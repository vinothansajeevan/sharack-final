import ApolloClient from 'apollo-boost';
import fetch from 'unfetch';

const stuUrl = 'http://localhost:5000/graphql';

let getAccessToken = function () {
    try {
        return JSON.parse(sessionStorage.getItem('user')).accessToken
    } catch (e) {
        return "";
    }
};
const getClient = () => new ApolloClient({
    fetch,
    uri: stuUrl,
    headers: {
        'content-type': 'application/json',
        Authorization: getAccessToken(),

    }
});

export { getClient};
