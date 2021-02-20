FROM node:12.20.2-alpine AS base
ARG CHANGE_APK_SOURCE=false
ARG CHANGE_NPM_SOURCE=false
ENV NPM_CONFIG_LOGLEVEL=info
ENV NODE_ENV=production
WORKDIR /
RUN     set -xe \
    &&  if [ ${CHANGE_APK_SOURCE} = true ]; then \
            sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/' /etc/apk/repositories ; \
        fi \
    &&  if [ ${CHANGE_NPM_SOURCE} = true ] ; then \
            npm config set registry http://mirrors.cloud.tencent.com/npm/ ; \
        fi \
    &&  apk update \
    &&  apk add --no-cache \
            git \
            sudo \
            curl \
            build-base \
            g++ \
            libpng \
            libpng-dev \
            jpeg-dev \
            pango-dev \
            cairo-dev \
            giflib-dev \
            python \
            libc6-compat \
    &&  npm -g config set user root \
    &&  npx hexo init blog \
    &&  cd blog \
    &&  npm install --save node-pre-gyp \
    &&  npm install --save hexo-cli \
    &&  npm install --save hexo-server \
    &&  npm install --save hexo-render-pug \
    &&  npm install --save hexo-renderer-stylus \
    &&  npm install --save hexo-tag-aplayer \
    &&  npm install --save hexo-generator-sitemap \
    &&  npm install --save hexo-generator-search \
    &&  npm install --save hexo-generator-tag \
    &&  npm install --save hexo-generator-category \
    &&  npm install --save wordcloud \
    &&  npm install --save hexo-algoliasearch \ 
    &&  npm install --save hexo-wordcount \ 
    &&  npm install --save hexo-generator-feed \ 
    # &&  npm install --save hexo-helper-live2d \ 
    # &&  npm install --save hexo-abbrlink \ 
    &&  npm install --save hexo-math \ 
    &&  npm install --save hexo-filter-mathjax \ 
    &&  npm install --save hexo-tag-common \ 
    &&  npm install --save hexo-widget-tree \ 
    &&  npm install --save hexo-blog-encrypt

FROM node:12.20.2-alpine
ENV NPM_CONFIG_LOGLEVEL=info
ENV NODE_ENV=production
ARG CHANGE_APK_SOURCE=false
ARG CHANGE_NPM_SOURCE=false
COPY --from=base /blog /blog
WORKDIR /
RUN     set -xe \
    &&  if [ ${CHANGE_APK_SOURCE} = true ]; then \
            sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/' /etc/apk/repositories ; \
        fi \
    &&  if [ ${CHANGE_NPM_SOURCE} = true ] ; then \
            npm config set registry http://mirrors.cloud.tencent.com/npm/ ; \
        fi \
    &&  apk update \
    &&  apk add --no-cache git \
    &&  npm -g config set user root
