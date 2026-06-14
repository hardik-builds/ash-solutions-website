import mongoose from 'mongoose';

const PasswordResetSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  code: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 600, // 10 minutes (600 seconds) TTL expiration
  },
});

export default mongoose.models.PasswordReset || mongoose.model('PasswordReset', PasswordResetSchema);
