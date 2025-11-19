FROM node:lts AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

FROM node:lts-slim AS production

WORKDIR /app

COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app .

EXPOSE 3000

ENV NODE_ENV production

CMD [ "node", "index.js" ]
