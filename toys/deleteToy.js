import { client, toysCollection } from '../mongoConnect.js'

const deleteToy = async () => {
  try {
    await client.connect()
    const toyDeleted = await toysCollection.deleteOne({name: 'Monopoly'})
    console.log(toyDeleted)
  } catch(error) {
    console.log(error)
  } finally {
    await client.close()
  }
}

deleteToy()