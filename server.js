const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const db = require('./models')


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hola Mundo pepe!');
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

app.listen(PORT, () => {
  console.log(`Aplicación pepe, escuchando el puerto${PORT}`);
});
