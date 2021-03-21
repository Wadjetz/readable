import express from "express"
import Mercury from "@postlight/mercury-parser"
import { parseHTML } from "linkedom"
import url from "url"

const app = express()

const port = 4300

app.get("/readable", (req, res) =>
  Mercury.parse(req.query.url as string)
    .then((result) => {
      if (result.content) {
        const originalUrl = new url.URL(req.query.url as string)
        console.log("originalUrl")
        const origin = originalUrl.origin
        const content = parse(result.content, origin)
        res.json({ ...result, content })
      } else {
        res.json(result)
      }
    })
    .catch((error) => res.json(error))
)

function parse(html: string, origin: string): string {
  const { document } = parseHTML(html)
  document.querySelectorAll("script").forEach((script) => script.remove())
  document.querySelectorAll("*").forEach((element) => element.removeAttribute("class"))
  document.querySelectorAll("img").forEach((img) => {
    const src = url.parse(img.src)
    if (!src.hostname) {
      const newUrl = url.resolve(origin, url.format(src))
      img.setAttribute("src", url.format(newUrl))
    }
  })
  return document.toString()
}

app.listen(port, () => console.log(`App listening on http://localhost:${port}`))
