import { client, toysCollection } from '../mongoConnect.js'

const editToy = async () => {
  try { 
    await client.connect()
    const updatedToy = await toysCollection.findOneAndUpdate(
      { name: 'Barbie'},
      { $set: { name: 'Monopoly', type: 'Board Game', description: 'Buy all the properties'}}
    )
    console.log(updatedToy)
  } catch (error) {
    console.log(error)
  } finally {
    await client.close()
  }
}

editToy()