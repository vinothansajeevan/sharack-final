class Auth {

    static authenticateUser(value) {
        localStorage.setItem('accessToken', value);
    }

    static deAuthenticateUser() {
        localStorage.removeItem('accessToken');
    }

    static isUserAuthenticated() {
        return localStorage.getItem('accessToken') !== null;
    }
}

export {Auth};