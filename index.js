const express = require("express")
const { getById, filterCategory, getColors, getBrand, subStock, addStock } = require("./controllers/allControllers");
const {tecnology} = require("./controllers/data")

const app = express() 

 
app.use(express.json())

app.listen(3001,()=>{
    console.log("listen to ", 3001)
})


app.get("/", (req,res)=>{
    res.send(tecnology)
})

app.get("/product/:id", (req,res)=>{
        const {id} = req.params
        const response = getById(id)
        res.send(response) 
})

app.get("/categories", (req,res)=>{
    const {category} = req.body
    const response = filterCategory(category)
    res.send(response) 
})

app.get("/colors", (req,res)=>{
    const {color} = req.body;
    const response = getColors(color)
    res.send(response) 
})

app.get("/brand", (req,res)=>{
    const {brand} = req.body;
    const response = getBrand(brand)
    res.send(response) 
})

app.put("/reStock", (req,res)=>{
    const {id,cant} = req.body;
    const response = subStock(id, cant)
    res.send(response)
})

app.put("/addStock", (req,res)=>{
    const {id,cant} = req.body;
    const response = addStock(id, cant)
    res.send(response)
})