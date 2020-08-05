FROM node:latest
WORKDIR /app
COPY ./backend/package.json /app
RUN npm install
COPY . /app
WORKDIR /app/backend
CMD npm start 
EXPOSE 8000
