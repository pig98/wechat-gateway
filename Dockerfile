FROM node:14-alpine

WORKDIR /root/wechat-gateway

EXPOSE 7001

CMD npm run dev
