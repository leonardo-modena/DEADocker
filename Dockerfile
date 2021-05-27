FROM nginx 

WORKDIR /app

COPY . /app

RUN nginx -t
