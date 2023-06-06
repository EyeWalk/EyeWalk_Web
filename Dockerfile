FROM node:alpine AS build
COPY package.json .
RUN npm i
COPY . .
RUN npm run build

FROM nginx
COPY --from=build ./build /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/