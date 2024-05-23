FROM node:16 as builder
RUN mdir -p/app
WORKDIR /app
COPY . .
RUN npm install
Run npm run build --prod
CMD [ "npm" ,"start"]