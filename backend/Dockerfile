FROM node:latest
RUN mkdir -p /usr/src/backend
WORKDIR /usr/src/backend
COPY package.json /usr/src/backend
RUN npm install --legacy-peer-deps
COPY . /usr/src/backend
EXPOSE 8080
CMD ["node", "index.js"]