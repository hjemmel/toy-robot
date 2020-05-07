FROM node:12.16.3-alpine
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn && yarn cache clean
COPY . ./
