FROM node:9.10-alpine

WORKDIR /app

EXPOSE 3000

COPY package.json package-lock.json ./
RUN npm install --only=production --ignore-scripts

COPY . .

RUN npm install --only=production

CMD ["npm", "start"]
