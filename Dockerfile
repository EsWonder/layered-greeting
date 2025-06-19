# Usar imagen base ligera de Node.js
FROM node:lts-alpine

# Crear carpeta de trabajo
WORKDIR /app

# Copiar archivos al contenedor
COPY . .

# Instalar dependencias (si existieran)
RUN npm install || true

# Ejecutar la aplicación
CMD ["node", "app.js"]
