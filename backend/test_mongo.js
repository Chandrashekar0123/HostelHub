const mongoose = require('mongoose');

const uri = "YOUR DATABASE URL"
console.log("Attempting to connect to MongoDB...");

mongoose.connect(uri)
.then(() => {
    console.log("SUCCESS: Successfully connected to MongoDB Atlas!");
    process.exit(0);
})
.catch((err) => {
    console.error("FAILURE: Could not connect to MongoDB.");
    console.error("Error details:", err.message);
    process.exit(1);
});
