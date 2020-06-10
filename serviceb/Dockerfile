FROM node:10-slim

USER node

RUN mkdir -p /home/node/serviceB

WORKDIR /home/node/serviceB

COPY --chown=node package*.json ./

RUN npm install

COPY --chown=node . .

COPY --chown=node ["compilers", "/home/node/serviceB/node_modules/@loopback/grpc/compilers/"]

RUN npm run build

EXPOSE 8081 3302

CMD [ "node", "." ]
