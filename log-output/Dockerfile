FROM node:lts-alpine

WORKDIR /usr/src/app

COPY package-lock.json .
COPY package.json .

RUN npm ci

COPY . .

CMD [ "npm", "start" ]