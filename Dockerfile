FROM node:21.0.0 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install --silent

COPY . .

RUN npm run build

FROM node:21.0.0

WORKDIR /app

RUN npm install -g serve

COPY --from=build /app/dist .

CMD ["serve", "-p", "80", "-s", "."]
