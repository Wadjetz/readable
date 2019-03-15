FROM node:latest

COPY . /readable

WORKDIR /readable

RUN npm install

CMD node src/index.js
