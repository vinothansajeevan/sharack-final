import {gql} from 'apollo-boost';
import {getClient} from "../StuGraphQl";
import _get from "lodash/get";





let authSource = {
    login: function (variables) {
        return getClient(login)
            .query({query: login, variables})
            .then(response => _get(response, 'data.login') || {})
            .catch(err => {
                throw err.message || 'Error in login';
            });
    },
    signUp:function (variables) {
        console.log(variables, 'variables');
        return getClient(CreateUser)
            .mutate({
                mutation: CreateUser,variables

            })
            .then(response => _get(response, 'data.user') || {})
            .catch(err => {
                throw err.message || 'Error while login';
            });
    },

    fetchUser:function () {
        return getClient(queryUser)
            .query({query: queryUser})
            .then(response => _get(response, 'data.users') || {})
            .catch(err => {
                throw err.message || 'Error querying users';
            });
    }
};
export {authSource};

const login = gql`

    query Login(
    $email: String!,
    $password: String!
    )
    {
        login(email:$email, password: $password) {
            userId
            token
            tokenExpiration
        }


    }
`;

const CreateUser = gql`

    mutation CreateUser(
    $ownerName: String!,
    $product: String,
    $email: String!,
    $contactNumber: String!,
    $registerNumber: String!,
    $city: String!,
    $companyName: String!,
    $password:String!) {
        createUser (user:
        {
            ownerName:$ownerName, 
            product:$product, 
            email: $email, 
            contactNumber:$contactNumber,
            registerNumber:$registerNumber,
            city:$city,
            companyName:$companyName,
            password:$password}) {
            _id
            ownerName
            email
            product
            contactNumber
            registerNumber
            companyName
            city
            password
        }


    }
`;

const queryUser = gql`
    query {
        users {
            _id
            email
            ownerName
            product
            companyName
            city
            registerNumber
            contactNumber
        }
    }
`;



export {login,CreateUser,queryUser}