class Auth {

    static authenticateUser(value) {
        sessionStorage.setItem('accessToken', value);
    }

    static deAuthenticateUser() {
        sessionStorage.removeItem('accessToken');
    }

    static isUserAuthenticated() {
        return sessionStorage.getItem('accessToken') !== null;
    }
}

export {Auth};