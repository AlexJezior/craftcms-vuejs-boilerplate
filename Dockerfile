FROM php:7.4-fpm
# Built on debian:buster-slim

# Set working directory
WORKDIR /var/www/html

RUN apt-get update && apt-get install -y \
        libfreetype6-dev \
        libmcrypt-dev \
        libpng-dev \
        libjpeg-dev \
        libpng-dev

RUN apt-get update && apt-get install -y \
    zlib1g-dev \
    libzip-dev \
    xfonts-75dpi \
    fontconfig \
    zip \
    unzip \
    curl \
    wget \
    xvfb \
    gnupg2 \
    apt-transport-https \
    mcrypt \
    libmagickwand-dev --no-install-recommends

RUN printf "\n" | pecl install imagick && docker-php-ext-enable imagick

RUN docker-php-ext-install pdo pdo_mysql pcntl zip

# Install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer


########################
# Linux fix...
#       .---.
#      /     \
#      \.@-@./
#      /`\_/`\
#     //  _  \\
#    | \     )|_
#   /`\_`>  <_/ \
#   \__/'---'\__/
RUN usermod -u 1000 www-data && groupmod -g 1000 www-data
########################


RUN chown -R www-data:www-data /var/www/html