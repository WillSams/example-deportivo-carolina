FROM node:16

ENV NODE_ENV ${NODE_ENV}

WORKDIR /opt/app/
COPY . /opt/app/
RUN npm ci --only=production

EXPOSE ${API_PORT}
CMD ["npm", "start"]