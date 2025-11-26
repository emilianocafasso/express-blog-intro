const express = require('express')
const app = express()
const port = 3000

posts = [
    {
        title: 'ciambellone',
        info: 'ciambellone classico della nonna, dolce e soffice',
        image: '/public/blog_images/images/ciambellone.jpeg',
        tags: ['dolce', 'colazione', 'classico']
    },
    {
        title: 'cracker_barbabietola',
        info: 'cracker alla barbabietola, calorie ridotte',
        image: '/public/blog_images/images/cracker_barbabietola.jpeg',
        tags: ['snack', 'salato', 'light']
    },
    {
        title: 'pane_fritto_dolce',
        info: 'pane fritto dolce, tipico della tradizione romagnola',
        image: '/public/blog_images/images/pane_fritto_dolce.jpeg',
        tags: ['dolce', 'fritto', 'tradizione']
    },
    {
        title: 'pasta_barbabietola',
        info: 'pasta fresca alla barbabietola, colore e gusto in tavola',
        image: '/public/blog_images/images/pasta_barbabietola.jpeg',
        tags: ['primo', 'colorato', 'vegetariano']
    },
    {
        title: 'torta_paesana',
        info: 'torta paesana, dolce tipico lombardo',
        image: '/public/blog_images/images/torta_paesana.jpeg',
        tags: ['dolce', 'tradizione', 'lombardia']
    }
]

app.get('/', (req, res) => {
    res.send("Server del mio blog")
})
// '/' è la rotta (endpoint), in questo caso mi indica la home del server

app.get('/bacheca', (req, res) => {
    res.json(posts)
})

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);

})


// Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità sulla base di quello che impareremo.

// Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto ”Server del mio blog”

// Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)

// Creiamo poi una rotta /bacheca che restituisca un oggetto json con la lista dei post.

// Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.

// Testare su postman