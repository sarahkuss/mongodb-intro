import {client, fruitsCollection} from '../mongoConnect.js'

const deleteFruit = async () => {
  try {
    await client.connect()
    const itemDeleted = await fruitsCollection.deleteOne({ name: "Pear" });
    console.log(itemDeleted);
    
  } catch (error) {
    console.log(error)
  } finally {
    await client.close()
  }
};

deleteFruit()