import express from 'express';
import { loginUser, registerUser, getProfile, updateProfile, bookAppointment, listAppointment, cancelAppointment, paymentStripe, verifyStripe, subscribeTms } from '../controllers/userController.js';
import { createOrder, captureOrder } from '../controllers/paypalController.js';
import upload from '../middleware/multer.js';
import authUser from '../middleware/authUser.js';
import userModel from '../models/userModel.js';
import jwt from 'jsonwebtoken';

const userRouter = express.Router();

userRouter.post("/register", registerUser)
userRouter.post("/login", loginUser)

// TMS subscription endpoint (no authentication required)
userRouter.post("/subscribe-tms", subscribeTms)

// Google login endpoint
userRouter.post("/google-login", async (req, res) => {
  const { email, name, picture, sub: googleId } = req.body;

  try {
    let user = await userModel.findOne({ email });

    if (!user) {
      user = await userModel.create({
        email,
        name,
        image: picture,
        googleId,
        password: "google_oauth_no_password", // placeholder
      });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET || "your_jwt_secret",
      { expiresIn: "7d" }
    );

    res.json({ token, user });
  } catch (error) {
    res.status(500).json({ message: "Google login failed", error: error.message });
  }
});

userRouter.get("/get-profile", authUser, getProfile)
userRouter.post("/update-profile", upload.single('image'), authUser, updateProfile)
userRouter.post("/book-appointment", authUser, bookAppointment)
userRouter.get("/appointments", authUser, listAppointment)
userRouter.post("/cancel-appointment", authUser, cancelAppointment)
userRouter.post("/payment-stripe", authUser, paymentStripe)
userRouter.post("/verifyStripe", authUser, verifyStripe)

userRouter.post("/paypal/create-order", authUser, createOrder);
userRouter.post("/paypal/capture-order/:orderID", authUser, captureOrder);

export default userRouter;
