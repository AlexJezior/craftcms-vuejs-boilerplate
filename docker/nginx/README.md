Generate a self-signed certificate. For example, in your terminal run the following snippet, replacing the domain values, in the `docker/nginx` directory: 

`openssl req -x509 -newkey rsa:4096 -sha256 -days 3650 -nodes \
-keyout cvbp.jeziordev.key -out cvbp.jeziordev.crt -subj "/CN=cvbp.jeziordev" \
-addext "subjectAltName=DNS:cvbp.jeziordev,IP:10.0.0.1"`

Once the cert and key file are generated, update the docker and nginx references to the files.
