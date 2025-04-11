import mongoose from 'mongoose';

const sessionSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Breathing', 'Visualization', 'Sound'],
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  soundType: {
    type: String,
    required: function() { return this.type === 'Sound'; }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

export const Session = mongoose.model('Session', sessionSchema);