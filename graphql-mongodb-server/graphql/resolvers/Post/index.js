import User from "../../../server/models/User";
import Post from "../../../server/models/Post";
import Order from "../../../server/models/Order";

export default {
  Query: {
    post: async (parent, { _id }, context, info) => {
      return await Post.findOne({ _id }).exec();
    },
    posts: async (parent, args, context, info) => {
      const res = await Post.find({})
        .populate()
        .exec();

      return res.map(u => ({
        _id: u._id.toString(),
        product: u.product,
          shopCategory: u.shopCategory,
          quantity: u.quantity,
        author: u.author,
        orders: u.orders
      }));
    }
  },
  Mutation: {
    createPost: async (parent, { post }, context, info) => {
      const newPost = await new Post({
        product: post.product,
          shopCategory: post.shopCategory,
          quantity: post.quantity,
        author: post.author
      });

      return new Promise((resolve, reject) => {
        newPost.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    updatePost: async (parent, { _id, post }, context, info) => {
      return new Promise((resolve, reject) => {
        Post.findByIdAndUpdate(_id, { $set: { ...post } }, { new: true }).exec(
          (err, res) => {
            err ? reject(err) : resolve(res);
          }
        );
      });
    },
    deletePost: (parent, { _id }, context, info) => {
      return new Promise((resolve, reject) => {
        Post.findByIdAndDelete(_id).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    }
  },
  Subscription: {
    post: {
      subscribe: (parent, args, { pubsub }) => {
        //return pubsub.asyncIterator(channel)
      }
    }
  },
  Post: {
    author: async ({ author }, args, context, info) => {
      return await User.findById(author);
    },
    orders: async ({ author }, args, context, info) => {
      return await Order.find({ author });
    }
  }
};
