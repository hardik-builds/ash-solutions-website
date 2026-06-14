import mongoose from 'mongoose';

const CaseStudySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title'],
    trim: true,
  },
  client: {
    type: String,
    required: [true, 'Please provide a client name'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Please provide a description'],
  },
  outcome: {
    type: String,
    required: [true, 'Please provide an outcome details'],
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

export default mongoose.models.CaseStudy || mongoose.model('CaseStudy', CaseStudySchema);
