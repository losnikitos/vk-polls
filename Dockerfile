FROM node:8

COPY . /app
WORKDIR /app
EXPOSE 80

CMD npm start
