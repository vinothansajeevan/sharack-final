export default `
  type Order {
    _id: ID!
    author: User!
    post: Post!
  }

  type Query {
    order(_id: ID!): [Order!]!
    orders: [Order!]!
  }

  type Mutation {
    createOrder(Order: CreateOrderInput!): Order!
    updateOrder(_id: ID!, Order: UpdateOrderInput): Order!
    deleteOrder(_id: ID!): Order!
  }

  type Subscription {
    order(postId: ID!): OrderSubscriptionPayload!
  }

  type OrderSubscriptionPayload {
    mutation: MutationType!
    order: Order!
  }

  input CreateOrderInput {
    post: ID!
    author: ID!
  }
  
  input UpdateOrderInput {
    text: String
  }

  enum MutationType {
    CREATED
    DELETED
    UPDATED
  }
`;
