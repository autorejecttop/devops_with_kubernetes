# Todo App

## Exercise 2.8

Continuing from exercise 2.6

I deleted all running resources

I added the database logic in `./todo-app-backend/src/index.ts`

I then created the headless service for the postgres database in `./manifests/backend/postgres-service.yaml`

I created the secret file for postgres password and encrypted it into `./manifests/backend/postgres-secret.enc.yaml`

After that, I created the postgres Stateful Set with the secret database password environment variable in `./manifests/backend/postgres-statefulset.yaml`

Next, I modified `./manifests/backend/deployment.yaml` to use all the needed environment variable from `./configmap.yaml` and `./manifests/backend/postgres-secret.enc.yaml`

I then built and pushed the new backend app using:

```bash
docker build -t autorejecttop/todo-app-backend:2.8 ./todo-app-backend
docker push autorejecttop/todo-app-backend:2.8
```

After that, I modified the `./manifests/backend/deployment.yaml` to use the newest image (2.8)

Lastly, I ran:

```bash
kubectl apply -f ./manifests/namespace.yaml
kubectl apply -f ./manifests/configmap.yaml
kubectl apply -f ./manifests/frontend/

SOPS_AGE_KEY_FILE=./manifests/backend/key.txt sops --decrypt ./manifests/backend/postgres-secret.enc.yaml | kubectl apply -f -

kubectl apply -f ./manifests/backend/postgres-service.yaml
kubectl apply -f ./manifests/backend/postgres-statefulset.yaml
kubectl apply -f ./manifests/backend/ingress.yaml
kubectl apply -f ./manifests/backend/service.yaml
kubectl apply -f ./manifests/backend/deployment.yaml
```
