import 'dotenv/config';
import app from './app.js';
import holdingsModel from './model/holdingsModel.js';
import positionsModel from './model/positionsModel.js'

const port = process.env.PORT || 5000;


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

app.listen(port, () => {
    console.log(`Server listening http://localhost:${port}`)
})