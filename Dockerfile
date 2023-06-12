# Korzystając z wersji node 14
FROM node:14

# w jakim katalogu zbudować aplikację
WORKDIR /app

# Do katalogu app zostanie skopiowany plika
COPY package*.json ./

RUN npm install
# instalacja wszystkich zależności

# skopiowanie pozostałych plików serwera (w tym index.js)
COPY . .

# ustawienie portu na kontenerze
EXPOSE 8080
# ustawienie komendy startu serwera
CMD [ "node", "index.js" ]
