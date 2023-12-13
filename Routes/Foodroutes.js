// // FoodRoutes.js
// const express = require("express");
// const router = express.Router();
// const {
//   createFoodCollection,
//   addToCart,
// } = require("../Controller/FoodController");
// const { userAuth } = require("../Middleware/authMiddleware");

// // Route to create food collection
// router.post("/createFoodCollection", async (req, res) => {
//   try {
//     await createFoodCollection();
//     res.status(200).send("Food collection created with 3 packets.");
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// // Route to add selected food items to the user's shopping cart
// router.post("/addToCart", userAuth, async (req, res) => {
//   try {
//     const userId = req.user._id; // Extract user ID from the JWT token

//     // Now you can use the userId in your addToCart function
//     const selectedFoodItems = req.body.selectedFoodItems;
//     await addToCart(userId, selectedFoodItems);

//     res
//       .status(200)
//       .send("Selected food items added to the user's shopping cart.");
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// module.exports = router;
