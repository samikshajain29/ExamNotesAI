import User from "../models/user.model.js";
import { getToken } from "../utils/token.js";

export const googleAuth = async (req, res) => {
  try {
    const { name, email } = req.body;
    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({
        name,
        email,
      });
    }
    let token = await getToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      samesite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: `googleSignup error ${error}` });
  }
};

export const logout = async (req, res) => {
  try {
    await res.clearCookie();
    return res.status(200).json({ message: "LogOut successfully" });
  } catch (error) {
    return res.status(500).json({ message: `LogOut error ${error}` });
  }
};
