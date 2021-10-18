const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const db = require('./models')


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.get('/', (req, res) => {
  res.send('Hola Mundo !');
});

app.get('/pupil', async (req, res) => {
    try {
        const pupils = await db.Pupil.findAll()
        res.send(pupils);
    } catch (error) {
        console.log(error)
    }
});
// to do
// encrypt
// pupils filter password
app.post('/login', async (req, res) => {
    try {
        const { password, email } = req.body

        const pupils = await db.Pupil.findAll({
            where: {
                password: password,
                email: email
            }
        })

        if(pupils.length == 0) return res.status(401).send({message: 'su usuario no existe'});
        const pupil = {
            name : pupils[0].name,
            email: pupils[0].email
        }
        res.send(pupil);
    } catch (error) {
        console.log(error)
    }
});

app.put('/pupil', async (req, res) => {
    try {
        const { pupil, id } = req.body

        await db.Pupil.update(pupil, {
            where: {
                id: id
            }
        })
        res.send({message: 'update ok'});
    } catch (error) {
        console.log(error)
    }
});

app.listen(PORT, () => {
  console.log(`Aplicación ISDLA, escuchando el puerto${PORT}`);
});
