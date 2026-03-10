# Log Output and Ping Pong App

## Exercise 2.7

Continuing from exercise 2.5

I deleted all resources currently running

I created `./manifests/ping-pong/postgres-secret.yaml`to store the database password and encrypted it into `./manifests/ping-pong/postgres-secret.enc.yaml`

I modified `./manifests/configmap.yaml` to store database hostname, port, dbname, and username

I created the headless service definition on `./manifests/ping-pong/postgres-service.yaml`

I created the stateful set definition on `./manifests/ping-pong/postgres-service.yaml` and inputted the database password there

I modified the `./manifests/ping-pong/deployment.yaml` to insert the database hostname, port, dbname, and username from configmap and password from secret

I modified `./ping-pong/index.ts` to read and update from database and not from file

I then built and pushed it to docker hub using:

```bash
docker build -t autorejecttop/ping-pong:2.7 ./ping-pong
docker push autorejecttop/ping-pong:2.7
```

I then modified `./manifests/ping-pong/deployment.yaml` to use the 2.7 image

After that, I just ran:

```bash
kubectl apply -f ./manifests/namespace.yaml
kubectl apply -f ./manifests/configmap.yaml
kubectl apply -f ./manifests/volumes/
kubectl apply -f ./manifests/log-output/

kubectl apply -f ./manifests/ping-pong/service.yaml
kubectl apply -f ./manifests/ping-pong/postgres-service.yaml
SOPS_AGE_KEY_FILE=./manifests/ping-pong/key.txt sops --decrypt ./manifests/ping-pong/postgres-secret.enc.yaml | kubectl apply -f -
kubectl apply -f ./manifests/ping-pong/deployment.yaml
kubectl apply -f ./manifests/ping-pong/statefulset.yaml
```
