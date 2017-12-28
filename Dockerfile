FROM nginx
COPY deploy/default.conf /etc/nginx/conf.d/default.conf
COPY build/ /srv/www/
COPY public /srv/www/public
