import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';



const pageSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  // Add more fields for the page as needed
});

const pdfSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  pages: [pageSchema],
  // Add more fields for the PDF as needed
});

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    pdfStore: [pdfSchema],
  },
  {
    timestamps: true,
  }
);



// Encrypt password using bcrypt
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
      next();
    }
  
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  });

  userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  };

const User = mongoose.model('User', userSchema);

export default User;