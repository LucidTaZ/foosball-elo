FROM node:10.2-alpine as build

RUN apk add --update sassc python \
    && rm -rf /var/cache/apk/*

WORKDIR /build

COPY package.json package-lock.json ./
RUN npm install --ignore-scripts
RUN npm rebuild node-sass

COPY . .

RUN npm install
RUN npm run build




FROM alpine:3.7

RUN apk add --update nginx \
    && rm -rf /var/cache/apk/*

WORKDIR /app

COPY docker/nginx_site.conf /etc/nginx/conf.d/foosballelo-webapp.conf

# nginx config
RUN ln -sf /dev/stdout /var/log/nginx/access.log \
    && ln -sf /dev/stderr /var/log/nginx/error.log \
    && rm /etc/nginx/conf.d/default.conf \
    && mkdir -p /var/run/nginx

COPY --from=build /build/dist .

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
