FROM node:10-slim

USER node

RUN mkdir -p /home/node/serviceA

WORKDIR /home/node/serviceA

COPY --chown=node package*.json ./

RUN npm install

COPY --chown=node . .

RUN npm run build

EXPOSE 8082

CMD [ "node", "." ]
