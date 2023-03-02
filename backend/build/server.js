import express from 'express';
const app = express();
app.get('/ads', (req, res) => {
    return res.json([
        { id: 1, name: 'anuncio 1' },
        { id: 2, name: 'anuncio 2' },
        { id: 3, name: 'anuncio 3' }
    ]);
});
app.listen(3001);
