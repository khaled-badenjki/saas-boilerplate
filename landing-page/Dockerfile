FROM node:18.13.0-bullseye-slim as installer
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:18.13.0-bullseye-slim as builder
WORKDIR /app
COPY . .
COPY --from=installer /app/node_modules ./node_modules
RUN yarn build-prod

FROM node:18.13.0-bullseye-slim as base
WORKDIR /app
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
ENV PORT 3000
CMD ["yarn", "start"]