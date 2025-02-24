const{MongoClient}=require('mongodb');
const url='mongodb+srv://Samriti:Samriti190819@cluster0.8jcom.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const client=new MongoClient(url);
const dbName='sample_mflix';
async function main()
{
    await client.connect();
    console.log('Connected successfully to the server');
    const db=client.db(dbName);
    return db;

}
module.exports={main}