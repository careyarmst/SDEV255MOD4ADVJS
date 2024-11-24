const express = require('express')

const app = express()

app.set('view engine', 'ejs')

app.listen(3000)

app.get('/', (req, res) => {
    const blogs =[
        {title: 'Yoshi finds eggs', snippet:'Good for him'},
        {title: 'Mario finds eggs', snippet:'Also Good for him'},
        {title: 'How to defeat Boss Level 1', snippet:'eh gets harder in DK'},
    ]
    res.render('index', {title: "Home Page", blogs})

});

app.get('/about', (req, res) => {
    res.render('about', {title: "About Page"})

});

app.get('/blogs/create', (req, res) => {
    res.render('create', {title: "Create Blog"})

});

app.use ((req, res) => {
    res.status(404).render('404', {title: "Page Not Found"})

});

