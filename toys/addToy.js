import { client, toysCollection } from '../mongoConnect.js'

client.connect()
const addToy = async () => {
  //get collection
  const myToy = {
    name: 'Ken',
    type: 'Doll',
    cool: true,
    price: 20,
    description: 'Boy, married to Barbie'
  }

  const addedtoy = await toysCollection.insertOne(myToy)
  console.log(addedtoy)
}

addToy()