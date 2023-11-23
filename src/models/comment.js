import { Schema, model, models } from 'mongoose';

const commentSchema = new Schema(
  {
    text: {
      type: String,
      required: [true, 'Comment is required'],
    },
    commentedBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Commenter is required'],
    },
    post: {
      type: Schema.Types.ObjectId,
      ref: 'Post',
      required: true,
    },
    likes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Comment = models.Comment || model('Comment', commentSchema);

export default Comment;
