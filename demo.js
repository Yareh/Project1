const { MongoClient } = require('mongodb');

require ("dotenv").config(); 

const uri = process.env.URI; 

async function main() {
    
    //instance
    const client = new MongoClient(uri);

    try{
        await client.connect();

        await createListing(client, {
            name: "New loft",
            summary: "A great loft for 2",
            bedrooms: 1,
            bathrooms: 1
        })

    } catch (e) {
        console.error(e);
    }finally {
        await client.close();
    }
}

main().catch(console.error);

//new funcion to add a new id in list 
async function createListing(client, newListing) {
    const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertOne(newListing);

    console.log(`New listing created with the following id: ${result.insertedId}`);

}

async function listDatabases(client){
    const databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => {
        console.log(`- ${db.name}`);        
    });
}