FROM node:16-alpine AS builder

WORKDIR /ang-student-management
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:1.24.0-alpine
COPY --from=builder /ang-student-management/dist/ang-student-management/ /usr/share/nginx/html


