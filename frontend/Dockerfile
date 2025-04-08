# Étape 1 : Build de l'app React avec Vite
FROM node:18-alpine AS builder

WORKDIR /app
COPY package.json ./
RUN npm install --include=dev

COPY . .
RUN npm run build

# Étape 2 : Serveur nginx
FROM nginx:stable-alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]