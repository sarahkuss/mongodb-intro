import {client, fruitsCollection} from '../mongoConnect.js' //.. steps out of fruits folder back into mongodb-intro

const addFruit = async () => {
  const myFruit = {
    name: "Pear",
    taste: "Juicy",
    price: 2,
    stock: 100,
  }
  try {
    await client.connect()
    const addedFruit = await fruitsCollection.insertOne(myFruit)
    console.log(addedFruit)
  } catch (error) {
    console.log(error)
  } finally {
    await client.close()
  }
};

addFruit()