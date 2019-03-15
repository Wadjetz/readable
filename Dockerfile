FROM node:11.11.0-alpine

COPY . /readable

WORKDIR /readable

RUN npm install

CMD node src/index.js
