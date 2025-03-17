const { MongoClient } = require("mongodb");

const url = "mongodb+srv://bhartivikram633:O3cX7HE2pcxgiCus@namastedev.enmhq.mongodb.net/?retryWrites=true&w=majority&appName=Namastedev";    
//pass:- O3cX7HE2pcxgiCus

const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    const collection = db.collection("User");
  
    
  
    return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());


// const { MongoClient } = require('mongodb');
// const url = "mongodb+srv://bhartivikram633:O3cX7HE2pcxgiCus@namastedev.enmhq.mongodb.net/?retryWrites=true&w=majority&appName=Namastedev";
// const client = new MongoClient(url);

// const dbName = 'HelloWorld';

// async function main() {
  
//   await client.connect();
//   console.log('Connected successfully to server');
//   const db = client.db(dbName);
//   const collection = db.collection('User');

  

//   return 'done.';
// }

// main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());