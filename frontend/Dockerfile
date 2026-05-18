FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

# Vite dev server con HMR accesible desde el host
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
