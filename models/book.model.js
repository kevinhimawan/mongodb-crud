const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/db'

module.exports = {
    insertBookModel : (req,res) =>{
        MongoClient.connect(url, function(err,client){
            if(err) return res.status(500).send(err)
            const data = client.db('library')
            data.collection('books').insert(req.body, function (err,response){
                if(err) return res.status(500).send(err)
                return res.status(201).send({
                    message: `Data has successfully been created`,
                    created: req.body
                })
                data.close()
            })
        })
    },

    viewBookModel: (req,res)=>{
        MongoClient.connect(url,(err,client)=>{
            if(err) return res.status(500).send(err)
            const data = client.db('library')
            data.collection('books').find().toArray((err,data)=>{
                if(err) return res.status(500).send(err)
                return res.status(200).send({
                    message: `Show all data`,
                    data: data
                })
                data.close()
            })
        })
    },

    updateBookModel: (req,res)=>{
        
        MongoClient.connect(url,(err,client)=>{
            if(err)return res.status(500).send(err)
            const data = client.db('library')
            data.collection('books').findOneAndUpdate(
                { title: req.body.findTitle},
                {
                    $set:{
                        title: req.body.title,
                        author: req.body.author,
                        category: req.body.category,
                        stock : req.body.stock
                    }
                },
                null
             ,(err,data)=>{
                 if(err) return res.status(500).send(err)
                 return res.status(200).send(data)
             })
        })
    },

    deleteBookModel: (req,res)=>{
        MongoClient.connect(url,(err,client)=>{
            const data = client.db('library')
            data.collection('books').deleteMany({
                category : "Mature (16+)"
            },null,(err,data)=>{
                if(err)return res.status(500).send(err)
                return res.status(200).send(data)
            })
        })
    } 
}