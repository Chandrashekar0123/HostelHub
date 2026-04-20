const mongoose = require('mongoose');

const uri = "mongodb://hostel_admin:XMCpPZIZbne7NnNs@ac-ozmdn3w-shard-00-00.tdsqbc0.mongodb.net:27017,ac-ozmdn3w-shard-00-01.tdsqbc0.mongodb.net:27017,ac-ozmdn3w-shard-00-02.tdsqbc0.mongodb.net:27017/?ssl=true&replicaSet=atlas-14n4zw-shard-0&authSource=admin&appName=hostelhub-db";

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
