import { MongoClient } from "mongodb";

async function main(){
    const uri = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(uri);
    const db = client.db("mydb");
    const message = db.collection("message");
await message.insertOne({});
await client.close();
  console.log("Record Added");
}

main();