import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb'; 
import path from 'path';
const app = express();

app.use(express.static(path.join(__dirname, '/build')));
app.use(bodyParser.json());

const withDB = async (operations, res) => {
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});
        const db = client.db('my-blog');
        await operations(db);
        client.close();
    } catch (error) {
        res.status(500).json({message: 'error connecting to db', error});
    }
}

app.get('/api/articals/:name', async (req, res) =>{
    withDB(async (db) => {
    const articalName = req.params.name;
    const articalsInfo = await db.collection('articals').findOne({name: articalName});
    res.status(200).json(articalsInfo);
    }, res);
})
app.post('/api/articals/:name/upvote', async (req, res) => {
    withDB(async (db) => {
        const articalName = req.params.name;
        const articalsInfo = await db.collection('articals').findOne({name: articalName});
        await db.collection('articals').updateOne({ name: articalName }, {
            '$set' : {
                upvotes: articalsInfo.upvotes +1 ,
            },
        });
        const updatedArticalInfo = await db.collection('articals').findOne({name: articalName});
        res.status(200).json(updatedArticalInfo);    
    }, res);
})

app.post('/api/articals/:name/add-comment', (req, res) => {
    const {username, text} = req.body;
    const articalName = req.params.name;
    withDB( async (db) => {
        const articalsInfo = await db.collection('articals').findOne({name: articalName});
        await db.collection('articals').updateOne({ name: articalName }, {
            '$set': {
                comments: articalsInfo.comments.concat({username, text}),
            }
        });
        const updatedArticalInfo = await db.collection('articals').findOne({ name: articalName});
        res.status(200).json(updatedArticalInfo);    
    }, res);
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});
app.listen(8000, () => console.log('Listening port 8000.'));