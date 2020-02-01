FROM node:12.14.1-alpine
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn && yarn cache clean
COPY . ./
