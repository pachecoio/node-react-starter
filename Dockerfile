FROM node:8.16

WORKDIR /usr/src/app

COPY . .

RUN npm install \
  && cd client && npm install \
  && npm run build \
  && cd ../

EXPOSE 5000

CMD [ "npm", "start" ]