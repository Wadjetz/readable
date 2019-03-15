const express = require("express")
const Mercury = require("@postlight/mercury-parser")

const app = express()

app.get('/readable', function (req, res) {
    Mercury.parse(req.query.url).then(result =>
        res.json(result)
    ).catch(error =>
        res.json(error)
    )
})
  
app.listen(3000, function () {
    console.log('App listening on port 3000!')
})
