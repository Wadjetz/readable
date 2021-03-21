# Readable API
Get readable content from URL

## Usage with curl
```sh
curl --location --request GET 'http://localhost:4300/readable?url=<url>'
```

## Result
```json
{
    "title": "Mercury Web Parser by Postlight",
    "author": null,
    "date_published": null,
    "dek": null,
    "lead_image_url": "https://mercury.postlight.com/_/src/components/images/large-summary-twitter.25a9c55f1e5441c6d04cf0020832b114.png",
    "content": "<div>content</div>",
    "next_page_url": null,
    "url": "https://mercury.postlight.com/web-parser/",
    "domain": "mercury.postlight.com",
    "excerpt": "Make semantic sense out of any web article. Mercury Web Parser turns web articles into structured content reliably and easily.",
    "word_count": 567,
    "direction": "ltr",
    "total_pages": 1,
    "rendered_pages": 1
}
```

## Usage with docker
```yml
version: '3'
services:
  readable:
    image: wadjetz/readable:latest
    container_name: readable
    ports:
      - 4300:4300
```
