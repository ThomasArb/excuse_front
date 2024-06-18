FROM node:18-alpine

WORKDIR /os/app
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /os/app
COPY package-lock.json /os/app
RUN npm install --silent

# start app
CMD ["npm", "start"]
