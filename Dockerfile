FROM node:14.4.0-alpine

COPY . /readable

WORKDIR /readable

RUN npm install

CMD npm start
