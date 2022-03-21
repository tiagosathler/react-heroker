FROM node:lts-alpine3.14

WORKDIR /app

COPY package.json .

RUN npm install --only=production

COPY . .

ENV MY_TEST="isso é um teste"

EXPOSE 4000

CMD ["npm", "start"]