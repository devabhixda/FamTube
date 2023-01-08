FROM node:latest
RUN mkdir -p /usr/src/frontend
WORKDIR /usr/src/frontend
COPY package.json /usr/src/frontend
RUN npm install --legacy-peer-deps
COPY . /usr/src/frontend
EXPOSE 3000
CMD ["npm", "start"]