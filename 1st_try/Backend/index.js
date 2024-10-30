import express from 'express'
const app = express();
const port = 3000

// app.get(('/'),(req,res)=>{
//     res.send('Server Created Successfully')
// })

app.get(('/api/jokes'),(req,res)=>{
    const jokes=[
        {
            id:1,
            title:'One',
            jokes:'First Jokes',
        },
        {
            id:2,
            title:'Two',
            jokes:'Second Jokes',
        },
        {
            id:3,
            title:'Three',
            jokes:'Third Jokes',
        },
        {
            id:4,
            title:'Four',
            jokes:'Forth Jokes',
        },
        {
            id:5,
            title:'Five',
            jokes:'Fifth Jokes',
        },
    ]
    res.send(jokes)
})

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})