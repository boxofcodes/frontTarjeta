### IONIC

#### Subdominio de Prueba

> http://app.boxofcodes.com/

> docker build -t eldar-ionic .

> docker run --name eldar-ionic-docker -p 8084:80 eldar-ionic

> docker save -o /home/sebastian/Desktop/ELDAR/dockerimages/eldar-ionic.tar eldar-ionic

> rsync -avz eldar-ionic.tar root@boxofcodes.com:/root/dockerImages

> docker load -i eldar-java.tar

> docker run --name eldar-ionic-docker -p 8084:80 eldar-ionic
