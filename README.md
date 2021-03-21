# Readable API
Get readable content from URL

## Usage with curl
```sh
curl --location --request GET 'http://localhost:4300/readable?url=<url>'
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
