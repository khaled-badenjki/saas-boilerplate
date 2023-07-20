FROM node:18.13.0-bullseye-slim as installer
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:18.13.0-bullseye-slim as builder
WORKDIR /app
COPY . .
COPY --from=installer /app/node_modules ./node_modules
RUN yarn build

ENV NODE_ENV production
# Expose the port on which the app will be running (3000 is the default that `serve` uses)
EXPOSE 3000
# Start the app
CMD [ "npx", "serve", "build" ]
