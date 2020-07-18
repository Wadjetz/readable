import express from "express"
import Mercury from "@postlight/mercury-parser"

const app = express()

app.get("/readable", (req, res) =>
  Mercury.parse(req.query.url)
    .then((result) => res.json(result))
    .catch((error) => res.json(error))
)

app.listen(3000, () => console.log("App listening on port 3000!"))
