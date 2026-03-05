/**
 * restore-db.js
 * Restores the MongoDB database from BSON dump files.
 * No mongorestore needed — pure Node.js.
 *
 * Usage:
 *   APOS_MONGODB_URI="mongodb+srv://..." node scripts/restore-db.js
 *
 * Requirements:
 *   npm install  (mongodb and bson are already in dependencies via apostrophe)
 */

require("dotenv").config();
const fs = require("fs");
const path = require("path");
const { MongoClient, BSON } = require("mongodb");

const DUMP_DIR = path.join(__dirname, "../dump/originProd");
const MONGO_URI = process.env.APOS_MONGODB_URI;
const DB_NAME = "origin";

// Collections to restore (skip heavy/unnecessary ones for initial setup)
const SKIP = ["aposCache", "aposDocVersions", "aposWorkflowCommits", "sessions"];

async function main() {
  if (!MONGO_URI) {
    console.error("ERROR: Set APOS_MONGODB_URI environment variable first.");
    console.error('Example: APOS_MONGODB_URI="mongodb+srv://user:pass@cluster.mongodb.net/origin" node scripts/restore-db.js');
    process.exit(1);
  }

  if (!fs.existsSync(DUMP_DIR)) {
    console.error("ERROR: Dump directory not found at:", DUMP_DIR);
    console.error("Make sure the dump/originProd/ folder exists.");
    process.exit(1);
  }

  console.log("Connecting to MongoDB...");
  const client = new MongoClient(MONGO_URI);
  await client.connect();
  const db = client.db(DB_NAME);
  console.log(`Connected. Restoring to database: ${DB_NAME}\n`);

  const files = fs.readdirSync(DUMP_DIR).filter(f => f.endsWith(".bson"));

  for (const file of files) {
    const collectionName = file.replace(".bson", "");
    if (SKIP.includes(collectionName)) {
      console.log(`Skipping: ${collectionName} (cache/history — not needed)`);
      continue;
    }

    const bsonPath = path.join(DUMP_DIR, file);
    const buffer = fs.readFileSync(bsonPath);

    if (buffer.length === 0) {
      console.log(`Skipping: ${collectionName} (empty)`);
      continue;
    }

    // Parse BSON documents from the dump file
    const docs = [];
    let offset = 0;
    while (offset < buffer.length) {
      const size = buffer.readInt32LE(offset);
      if (size <= 0 || offset + size > buffer.length) break;
      const docBuffer = buffer.slice(offset, offset + size);
      docs.push(BSON.deserialize(docBuffer));
      offset += size;
    }

    if (docs.length === 0) {
      console.log(`Skipping: ${collectionName} (no documents parsed)`);
      continue;
    }

    try {
      const collection = db.collection(collectionName);
      // Drop existing collection first to avoid duplicates
      await collection.drop().catch(() => {});
      await collection.insertMany(docs, { ordered: false });
      console.log(`✓ Restored: ${collectionName} (${docs.length} documents)`);
    } catch (err) {
      console.log(`✗ Error restoring ${collectionName}: ${err.message}`);
    }
  }

  await client.close();
  console.log("\nDatabase restore complete!");
  console.log("You can now start the app: node app.js");
}

main().catch(err => {
  console.error("Fatal error:", err);
  process.exit(1);
});
