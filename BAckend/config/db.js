import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const mongoURI = 'mongodb://127.0.0.1:27017/your_db_name'; // Declare mongoURI here
    const conn = await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit with failure
  }
};

export default connectDB;

