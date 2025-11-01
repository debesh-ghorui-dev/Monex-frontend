import 'dotenv/config';
import app from './app.js';

const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Server listening http://localhost:${port}`)
})