import { mergeResolvers } from "merge-graphql-schemas";

import User from "./User/";
import Post from "./Post/";
import Order from "./Order/";

const resolvers = [User, Post, Order];

export default mergeResolvers(resolvers);
