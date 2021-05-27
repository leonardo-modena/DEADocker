FROM alpine

RUN apk update && apk add git
RUN apk add nodejs npm

RUN npm install -g @angular/cli

WORKDIR /app

COPY . /app

RUN npm install
