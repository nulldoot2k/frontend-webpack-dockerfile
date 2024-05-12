FROM node:latest

LABEL version="latest"
LABEL description="This is webpack reactjs server Docker image."
LABEL maintainer="anon07@proton.me"

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx webpack

EXPOSE 3000

CMD ["node", "index.js"]
