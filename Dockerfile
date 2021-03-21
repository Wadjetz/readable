FROM node:15.12.0-alpine

COPY . /readable

WORKDIR /readable

RUN npm install

EXPOSE 4300

CMD npm start
