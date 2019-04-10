export default `
  type User {
    _id: String!
    companyName: String!
    ownerName: String!
    product: String
    city: String!
    registerNumber: String!
    contactNumber: String!
    email: String!
    password:String!
    posts: [Post!]!
    orders: [Order!]!
  }
  type AuthData{
  userId:ID!
  token:String!
  tokenExpiration:Int!
  }

  type Query {
    user(_id: ID!): User!
    users: [User!]!
    login(email:String!,password:String!):AuthData!
  }

  type Mutation {
    createUser(user: CreateUserInput): User!
    updateUser(_id: String!, user: UpdateUserInput!): User!
    deleteUser(_id: String!): User!
  }

  input CreateUserInput {
    companyName: String!
    ownerName: String!
    product: String
    city: String!
    registerNumber: String!
    contactNumber: String!
    email: String!
    password:String
  }
  
  input UpdateUserInput {
    companyName: String
    ownerName: String
    product: String
    city: String
    registerNumber: String
    contactNumber: String
    email: String
    password:String

  } 
`;
