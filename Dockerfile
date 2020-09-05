FROM node:14.9.0

COPY . /readable

WORKDIR /readable

RUN npm install

CMD npm start
