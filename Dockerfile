FROM node:12.4.0-alpine

COPY . /readable

WORKDIR /readable

RUN npm install

CMD node src/index.js
