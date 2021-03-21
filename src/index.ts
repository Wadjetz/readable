import express from "express"
import Mercury from "@postlight/mercury-parser"
import { parseHTML } from "linkedom"

const app = express()

const port = 4300

app.get("/readable", (req, res) =>
  Mercury.parse(req.query.url as string)
    .then((result) => {
      if (result.content) {
        const content = parse(result.content)
        res.json({ ...result, content })
      } else {
        res.json(result)
      }
    })
    .catch((error) => res.json(error))
)

function parse(html: string): string {
  const { document } = parseHTML(html)
  document.querySelectorAll("script").forEach((script) => script.remove())
  document.querySelectorAll("*").forEach((element) => element.removeAttribute("class"))
  return document.toString()
}

app.listen(port, () => console.log(`App listening on http://localhost:${port}`))
