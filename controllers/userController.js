import ErrorHandler from "../utils/errorHandler.js";
import { User } from "../model/user.js";
import { catchAsyncError } from "../middlewares/catchAsyncError.js";

export const newUser = catchAsyncError(async (req, res, next) => {
    let user = await User.findOne({ email: "whitedevil@gmail.com" });

    if(user) {
        return next(new ErrorHandler("User Already Exist"));
    }
    
    await User.create({
        name: "Prashant",
        email: "whitedevil@gmail.com",
    })

    res.status(201).json({ message: "User created successfully" });
});