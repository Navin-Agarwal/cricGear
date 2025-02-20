const express = require("express");
const router = express.Router();
const { Users } = require("../models/users.model");
const passport = require("passport");
const {
  getCartAndWishlist,
  getUser,
  saveUserToDataBase,
} = require("../utils/util_func");
router
  .route("/user/:userId")
  .get(getUser, getCartAndWishlist, async (req, res) => {
    const {
      wishlist,
      cart,
      user: { _id: user_id },
    } = req;
    res.status(200).json({ success: true, user_id, wishlist, cart });
  });

router.post(
  "/user/signin",
  (req, res, next) => {
    passport.authenticate("local", (err, user) => {
      if (err) {
        return res.status(500).json({ success: false, message: err.message });
      }
      if (!user) {
        return res.status(401).json({
          success: false,
          message: "Incorrect username or password",
        });
      }
      req.login(user, (err) => {
        if (err) {
          return res.status(500).json({ success: false, message: err.message });
        }
        req.user = user;
        next();
      });
    })(req, res, next);
  },
  getCartAndWishlist
);
router
  .route("/user/signin")
  .get(async (req, res) => {
    try {
      const { user: userame } = req;
      const { cartItems } = await Users.findOne({ userame });
      res.json({ success: true, cartItems: cartItems });
    } catch (error) {
      res.json({ success: false, error: error.message });
    }
  })
  .post(async (req, res) => {
    const {
      wishlist,
      cart,
      user: { _id: user_id },
    } = req;
    res.status(200).json({ success: true, user_id, wishlist, cart });
  });

router.post("/user/signup", saveUserToDataBase, async (req, res) => {
  const { user_id, user_name } = req;
  res.status(200).json({
    success: true,
    message: "User Added Successfully",
    data: { user_id, user_name },
  });
});

module.exports = router;
