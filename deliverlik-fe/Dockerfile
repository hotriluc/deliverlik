FROM node:19-alpine as development

WORKDIR /usr/src/app/client

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

RUN yarn build

FROM node:19-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app/client

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY --from=development /usr/src/app/client/dist ./dist

# NEED WEB SERVER TO SERVE APP IN PRODUCTION
