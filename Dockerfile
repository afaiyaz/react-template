FROM nginx:alpine

COPY deploy/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY build /usr/share/nginx/html
COPY public /usr/share/nginx/html/public

# Expose standard http and https ports
EXPOSE 80
