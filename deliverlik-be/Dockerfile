FROM node:19-alpine as development

WORKDIR /usr/src/app/server

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

RUN yarn build

# PRODUCTION STAGE
FROM node:19-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app/server

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY --from=development /usr/src/app/server/dist ./dist

CMD ["node","dist/index.js"]