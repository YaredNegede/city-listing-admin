# Stage 0: compile angular frontend
FROM node:latest as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# Stage 1: serve app with nginx server
FROM nginx:latest
RUN rm -f /usr/share/nginx/html/index.html
WORKDIR /usr/share/nginx/html
COPY --from=build /app/dist/cities-listing-service-admin .
RUN ls -alF /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
