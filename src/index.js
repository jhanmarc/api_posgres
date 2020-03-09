const express = require('express')

const app = express()
const port = process.env.PORT || 3000


// middlewares
app.use(express.json())
    // solo cadenas de texto not file
app.use(express.urlencoded({ extended: false }))

// routes
app.use(require('./routes/index'))
app.use(require('./routes/users'))


app.listen(port, () => {
    console.log(`Server on port  http://localhost:${port}`)
});