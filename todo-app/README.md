# Todo App

## Exercise 2.10

Continuing from exercise 2.9

I deleted all running resources in the `default`, `exercises`, and `project` namespace

I locally setup Prometheus etc. just like in the practices

I used Grafana Alloy to get the logs from all pods

I modified `./todo-app-backend/src/index.ts` to have a custom logger

I modified the deployment labels to use the [recommended labels](https://kubernetes.io/docs/concepts/overview/working-with-objects/common-labels/) because it is used by default by Grafana Alloy's [configuration example to forward Kubernetes logs to Loki](https://grafana.com/docs/alloy/latest/collect/logs-in-kubernetes/)

I then built and pushed the newest Docker image using:

```bash
docker build -t autorejecttop/todo-app-backend:2.10 ./todo-app-backend/
docker push autorejecttop/todo-app-backend:2.10
```

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
