FROM node:20-alpine AS build
WORKDIR /app
COPY . ./
RUN npm install
RUN npx update-browserslist-db@latest
RUN npm run build

FROM --platform=$TARGETPLATFORM nginx:alpine AS host
COPY --from=build /app/dist /usr/share/nginx/html/
COPY --from=build /app/config/nginx/site.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]