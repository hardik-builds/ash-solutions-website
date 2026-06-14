import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title'],
    trim: true,
  },
  content: {
    type: String,
    required: [true, 'Please provide content'],
  },
  author: {
    type: String,
    required: [true, 'Please provide an author name'],
    default: 'ASH Solutions',
  },
  tags: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema);
