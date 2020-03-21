FROM node as dev

EXPOSE 5000 3000

WORKDIR /app

RUN npm install -g nodemon

COPY package*.json ./

RUN npm install

WORKDIR /app/client

COPY ./client/package*.json ./

RUN npm install

WORKDIR /app

COPY . .

ENV NODE_ENV=development

CMD [ "npm", "run", "dev" ]

# PROD CONFIG
FROM dev as prod

ENV NODE_ENV=production

CMD [ "npm", "start" ]