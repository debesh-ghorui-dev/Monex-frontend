import 'dotenv/config';
import app from './app.js';
import positionsModel from './model/positionsModel.js'

const port = process.env.PORT || 5000;


// Routers
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/holdings', async(req, res) => {
    let data = await holdingsModel.find({});
    res.json(data)
})

app.get('/positions', async(req, res) => {
    let data = await positionsModel.find({});
    res.json(data)
})

app.post('order/new', (req, res) => {
    let newOrder = new ordersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode
    });

    newOrder.save();

    res.send("Order save!")
})

app.listen(port, () => {
    console.log(`Server listening http://localhost:${port}`)
})