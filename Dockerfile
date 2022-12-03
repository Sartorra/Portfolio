## BUILD STAGE
FROM node:latest as builder

WORKDIR /usr/src/app

COPY . .
RUN npm install
RUN npm run build

# Remove build dependencies
RUN rm -rf /usr/src/app/src/app
RUN rm -rf /usr/src/app/node_modules

# Move compiled angular app to src
RUN mv /usr/src/app/dist/portfolio /usr/src/app/src/app

## PRODUCTION STAGE
FROM node:latest as server

COPY --from=builder /usr/src/app /usr/src/app

WORKDIR /usr/src/app

RUN npm install --production

ENV NODE_ENV=production
ENV NODE_OPTIONS=--openssl-legacy-provider

EXPOSE 80
EXPOSE 443

ENTRYPOINT [ "npm", "run", "server" ]