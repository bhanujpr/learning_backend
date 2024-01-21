import express from "express";

const app = express();

app.get('/',(req,res)=>{
    res.send("Server is ready")
});

app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            title:'1st Joke',
            content:'Joke number one'
        },
        {
            id:2,
            title:'2nd Joke',
            content:'Joke number two'
        },
        {
            id:3,
            title:'3rd Joke',
            content:'Joke number three'
        },
        {
            id:4,
            title:'4th Joke',
            content:'Joke number four'
        },
        {
            id:5,
            title:'5th Joke',
            content:'Joke number five'
        }
    ]
    res.send(jokes)
})


const port=process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Serve at http://localhost:${port}`)
})