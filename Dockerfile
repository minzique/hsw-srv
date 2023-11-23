FROM node:lts-alpine

WORKDIR /usr/src/app

RUN npm install -g pnpm
# Files required by pnpm install
COPY package.json pnpm-lock.yaml ./

RUN pnpm i --prod

COPY ./ ./
ENV PORT 8080
EXPOSE 8080

CMD [ "node", "src/index.js" ]