import User from "../models/User.js";

const PostSignup = async (req, res) => {
    const { fullName, email, password, profession } = req.body
    const user = new User({
        fullName,
        email,
        password,
      profession   
    })
    try {
        const savedUser = await user.save();
        res.json({
            success: true,
            message: "signup successfully",
            data: savedUser
        })
    }
    catch (e) {
        res.json({
            success: false,
            message: e.message,
            data: null

        })
    }
}

const postLogin = async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({
        email: email,
        password: password
    });
    if (user) {
        res.json({
            success: true,
            message: "login successfully",
            data: user
        })
    }
    else {
        return res.json({
            success: false,
            message: "invalid credentials ",
            data: null
        })
    }

}


export { PostSignup, postLogin };