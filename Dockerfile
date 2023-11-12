From node:carbon

RUN mkdir -p /usr/src/app

COPY ./front /usr/src/app

WORKDIR /usr/src/app

RUN npm install

RUN ./node_modules/.bin/webpack

#RUN npm test

EXPOSE 4003

CMD ["npm", "run", "node-server"]
