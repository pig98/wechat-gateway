FROM node:14-alpine

WORKDIR /root/alert-gateway

EXPOSE 7001

CMD npm run start
