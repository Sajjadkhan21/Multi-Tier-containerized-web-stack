FROM node:alpine
WORKDIR /app

# Copy package files first to leverage Docker's layer caching mechanism
COPY package.json ./
RUN npm install

# Copy the rest of the application files
COPY ./src ./src

EXPOSE 5000
CMD ["npm", "start"]