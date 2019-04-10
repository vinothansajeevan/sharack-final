export default `
  type Post {
    _id: ID!
    product: String!
    shopCategory: String!
    quantity:String!
    author: User!
    orders: [Order!]!
  }

  type Query {
    post(_id: ID!): Post!
    posts: [Post!]!
  }

  type Mutation {
    createPost(post: CreatePostInput): Post!
    updatePost(_id: ID!, post: UpdatePostInput): Post!
    deletePost(_id: ID!): Post!
  }

  type Subscription {
    post: PostSubscriptionPayload!
  }

  type PostSubscriptionPayload {
    mutation: MutationType!
    post: Post!
  }

  input CreatePostInput {
    product: String!
    shopCategory: String!
    quantity:String!
    author: String!
  }
  
  input UpdatePostInput {
    product: String
    shopCategory: String
    quantity: String
  }

  enum MutationType {
    CREATED
    DELETED
    UPDATED
  }
`;
