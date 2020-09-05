import express from "express"
import Mercury from "@postlight/mercury-parser"

const app = express()

const port = 3000

app.get("/readable", (req, res) =>
  Mercury.parse(req.query.url as string)
    .then((result) => res.json(result))
    .catch((error) => res.json(error))
)

app.listen(port, () => console.log(`App listening on http://localhost:${port}`))
