FROM node

ENV MONGO_DB_USERNAME=raj
ENV MONGO_DB_PASSWORD=raj

RUN mkdir -p nodeapp

COPY . /nodeapp

CMD ["node", "/nodeapp/server.js"]


