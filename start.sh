sudo docker run -dit --name tecmint-web -p 8080:80 -v $(pwd):/usr/local/apache2/htdocs/ httpd:2.4
