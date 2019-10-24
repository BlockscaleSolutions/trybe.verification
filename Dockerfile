FROM node:10.13

RUN npm install -g serve

# Create app directory
COPY ./out /usr/app/
WORKDIR /usr/app/

CMD serve -p 3000