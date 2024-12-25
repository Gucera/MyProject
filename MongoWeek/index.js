mongoose = require('mongoose');
//app = express();
const MONGO_URI = 'mongodb://localhost:27017/Week8';
mongoose.connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;

// Handle connection errors
db.on('error', function (err) {
  console.log("Error occurred during connection" + err);
});

// Handle successful connection
db.once('connected', function () {
  console.log(`Connected to ${MONGO_URI}`);
});

// Creating the schema
const PersonScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  Gender: String,
  Salary: Number,
});

// Creating the model named as "modelname" with the collection "personCollection"
const person_doc = mongoose.model('modelname', PersonScheme, 'personCollection');

// Task 7: Update all documents where Gender is "Female" and set Salary to 5555
person_doc.updateMany({ Gender: "Female" }, { $set: { Salary: 5555 } })
  .then((result) => {
    console.log("Documents updated:", result.modifiedCount);
  })
  .catch((error) => {
    console.error("Error updating documents:", error);
  });
