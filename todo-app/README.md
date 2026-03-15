# Todo App

## Exercise 2.9

Continuing from exercise 2.8

I deleted all running resources

I created the script for the hourly todo and the Dockerfile for image declaration in `./random-todo-hourly/`

I added the declaration for the cron job in `./manifests/random-todo-hourly/`

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

kubectl apply -f ./manifests/random-todo-hourly/
```
