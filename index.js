const express = require('express');
const app = express();
const PORT = 8080;
app.use(express.json())
app.listen(
    PORT,
    ()=> console.log('API live at http://localhost:8080')
)

app.get('/event', (req,res) => {
    res.status(200).send({
        name : "tuition",
        detail : "Start today at 12a.m, end after 20 days"
    })
});


app.get('/student/:id', (req, res) =>{
    res.status(200).send({
        id : req.params,
        name : "dung",
        totalTuition: "12.000.000",
        tuitionStatus: "Not yet"
    })
});

app.post('/tshirt/:id', (req,res)=>{
    const { id } = req.params;
    const { logo } = req.body;
    const { size } = req.body;
    if(!logo){
        res.status(418).send({ message: 'We need a logo!' })
    }
    res.send({
        tshirt : res.body
    })
});
