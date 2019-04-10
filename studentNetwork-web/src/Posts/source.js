import {gql} from 'apollo-boost';
import {getClient} from '../StuGraphQl';
import _get from 'lodash/get';
import {t} from 'typy';


// let postArgs = function (setPost) {
//     let post = {};
//
//     if (setPost.author) {
//         post.author = {
//             _id: setPost.author
//
//         }
//     }
//
//     if (t(setPost, 'title').safeObject) {
//         post.title = setPost.title
//     }
//
//     if (t(setPost, 'body').safeObject) {
//         post.body = setPost.body
//     }
//
//     if(setPost.published){
//         post.published = setPost.published
//     }
//     console.log(post, 'args');
//     return post
// };
let postSource = {
    fetchPost: function () {
        return getClient(queryPost)
            .query({query: queryPost})
            .then(response => _get(response, 'data.posts') || {})
            .catch(err => {
                throw err.message || 'Error querying users';
            });
    },

    createPost: function (variables) {
        return getClient(CreatePost)
            .mutate({mutation: CreatePost, variables})
            .then(response => _get(response, 'data.createPost') || {})
            .catch(err => {
                throw err.message || 'Error while mutate';
            });


    }
};
export default postSource;

const queryPost = gql`
query{
    posts{
        _id
        quantity
        product
        shopCategory
        author{
            _id
           ownerName
        }
    }
}`;


const CreatePost = gql`

    mutation CreatePost(
    $quantity:String!,
    $product:String!,
    $shopCategory:String!,
    $author:String!
    ) 
    {
        createPost(
        post: {
            quantity: $quantity,
            product: $product,
            shopCategory: $shopCategory,
          author: $author
        }) {
            _id
            quantity
            product
            shopCategory
            author{
                _id
                ownerName
            }
        }


    }
`;


export {queryPost, CreatePost}