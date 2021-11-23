FROM node:alpine
ENV NODE_ENV=production
ENV PORT=3001
WORKDIR /home/node/app
COPY ["package*.json", "package-lock.json", "./"]
RUN npm install --silent
COPY . .
EXPOSE 3001
CMD ["npm", "start"]