import { MongoClient } from "mongodb";

async function insertRecord(jsonDocument){
    const uri = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(uri);
    const db = client.db("mydb");
    const message = db.collection("message");

await message.insertOne(jsonDocument);
//close connection

await client.close();
  console.log("Record Added");
}
async function main(){
  let jsonDocument = {message:"Hello Universe",to: "rohit",from:"Pramod"};
await  insertRecord(jsonDocument);
}
main();