FROM node

RUN apt-get update -y && apt-get install -y iputils-ping

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 5005

CMD ["node","server.js"]