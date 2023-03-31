// Separated all of these into separate files and changed collection to fruitsCollection

// imports mongoConnect
import { client } from "./mongoConnect.js"; // ./ because in the same folder


const addFruit = async () => {
  const myFruit = {
    name: "Pear",
    taste: "Juicy",
    price: 2,
    stock: 100,
  }
  try {
    await client.connect()
    const addedFruit = await collection.insertOne(myFruit)
    console.log(addedFruit)
  } catch (error) {
    console.log(error)
  } finally {
    await client.close()
  }
};

//addFruit()

// update
const editFruit = async () => {
  // collection.findOne({name: 'Pear'})
  const updatedFruit = await collection.findOneAndUpdate(
    { name: "Pineapple" },
    { $set: { name: "Grape", special: true } }
    );
    
    console.log(updatedFruit);
  };
  
  // editFruit()
  
  const getAllFruits = async () => {
    try {
      await client.connect(); //connect to client
      const allFruits = await collection.find().toArray()
      console.log(allFruits);
      
  } catch (error) {
    console.log(error)
  } finally {
    await client.close()
  }
  
 
  // *using the .then .catch
  // collection
  //   .find()
  //   .toArray()
  //   .then((items) => console.log(items))
  //   .catch((err) => console.log(err));

};

//getAllFruits();

// delete
const deleteFruit = async () => {
  try {
    await client.connect()
    const itemDeleted = await collection.deleteOne({ name: "Pear" });
    console.log(itemDeleted);
    
  } catch (error) {
    console.log(error)
  } finally {
    await client.close()
  }
};

deleteFruit()
