FROM node:18.16.0 as build

ENV NODE_ENV=production

WORKDIR /usr/app

RUN npm install -g serve

COPY . /src

RUN cd /src && npm install --production && npm run build && mv /src/build/ /usr/app/ && rm -Rf /src

EXPOSE 3000

CMD serve -s /usr/app/build