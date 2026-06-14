import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, 'Please provide your name'],
    trim: true,
  },
  company: {
    type: String,
    trim: true,
    default: '',
  },
  rating: {
    type: Number,
    required: [true, 'Please provide a rating'],
    min: 1,
    max: 5,
  },
  comment: {
    type: String,
    required: [true, 'Please provide a comment'],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Review || mongoose.model('Review', ReviewSchema);
