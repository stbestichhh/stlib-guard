# Build for produciton
FROM node:21-alpine3.18 as build

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

# Production
FROM node:21-alpine3.18

# App env
ENV NODE_ENV production
USER node

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install --production --frozen-lockfile

COPY --from=build /usr/src/app/dist ./dist

CMD ["node", "dist/index.js"]
