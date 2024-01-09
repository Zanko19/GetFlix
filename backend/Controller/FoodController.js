// const MongoClient = require("mongodb").MongoClient;

// // Connection URL
// const localDB = process.env.MONGODB_URL;

// // Database Name
// const dbName = "Food";

// // Function to create a collection for 3 food packets
// async function createFoodCollection() {
//   const client = new MongoClient(localDB, { useNewUrlParser: true });

//   try {
//     await client.connect();

//     const db = client.db(dbName);

//     // Create a collection for 3 food packets
//     const foodCollection = await db.createCollection("food_packets");

//     // Insert 3 food packets into the collection
//     const foodItems = [
//       { name: "Food Packet 1" },
//       { name: "Food Packet 2" },
//       { name: "Food Packet 3" },
//     ];

//     await foodCollection.insertMany(foodItems);

//     console.log("Food collection created with 3 packets.");
//   } finally {
//     await client.close();
//   }
// }

// // Function to add selected food packets to the user's shopping cart
// async function addToCart(userId, selectedFoodItems) {
//   const client = new MongoClient(localDB, { useNewUrlParser: true });

//   try {
//     await client.connect();

//     const db = client.db(dbName);

//     // Assume you have a user collection with shopping carts
//     const userCollection = db.collection("users");

//     // Find the user by ID
//     const user = await userCollection.findOne({ _id: userId });

//     if (user) {
//       // Add selected food items to the user's shopping cart
//       user.shoppingCart = user.shoppingCart || [];
//       user.shoppingCart = user.shoppingCart.concat(selectedFoodItems);

//       // Update the user document in the collection
//       await userCollection.updateOne(
//         { _id: userId },
//         { $set: { shoppingCart: user.shoppingCart } }
//       );

//       console.log("Selected food items added to the user's shopping cart.");
//     } else {
//       console.log("User not found.");
//     }
//   } finally {
//     await client.close();
//   }
// }

// // Example usage
// async function runExample() {
//   try {
//     // First, create the food collection
//     await createFoodCollection();

//     // Assume userId is the user's ID and selectedFoodItems is an array of selected food items
//     const userId = "exampleUserId";
//     const selectedFoodItems = ["food1", "food2", "food3"];

//     // Then, add selected food items to the user's shopping cart
//     await addToCart(userId, selectedFoodItems);

//     console.log("Example run completed successfully.");
//   } catch (error) {
//     console.error("Error in example run:", error);
//   }
// }

// // Call the example usage function
// runExample();
