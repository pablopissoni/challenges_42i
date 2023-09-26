# Utiliza la imagen oficial de Node.js basada en Alpine como base
FROM node:18-alpine

# Establece el directorio de trabajo en el contenedor como /app
WORKDIR /app

# Copia los archivos package.json y package-lock.json del proyecto local al contenedor
COPY package*.json .

# Instala las dependencias del proyecto utilizando npm
RUN npm install

# Copia el resto de los archivos del proyecto local al directorio de trabajo en el contenedor
COPY . .

# El comando con que se ejecutará cuando el contenedor se inicie
CMD ["npm", "start"]