import { MongoClient, Db } from "mongodb"
import { config } from "dotenv"
config()

const client = new MongoClient(process.env.DB_CONNECTION)

/**
 * @type {null|Db}
 */

let db = null

/**
 * 
 * @returns {Promise<Db>}
 */

export async function connect() {
  try {
    if (!db) {
      await client.connect()
      db = client.db("Launchers")
      console.log("connect to mongoDB");
    }
    return db
  } catch (error) {
    throw error
  }
}