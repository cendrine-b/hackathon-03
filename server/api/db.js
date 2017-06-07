import mongoose from 'mongoose';

export default (callback) => {
    mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/hackathon-03');
    callback();
};
