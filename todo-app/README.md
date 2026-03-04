# Todo App

## Exercise 2.2

_this shouldn't have taken me a long time to complete, but it is what it is_

I refactored the structure of the project

I then created the backend as specified

I ran:

```bash
docker build -t autorejecttop/todo-app-backend:2.2 ./todo-app-backend
docker build -t autorejecttop/todo-app-frontend:2.2 ./todo-app-frontend

docker push autorejecttop/todo-app-backend:2.2
docker push autorejecttop/todo-app-frontend:2.2
```

I created it's respective manifest files and modified the previous ones to challenge myself into building the mental model for Deployment, Service, and Ingress

Lastly, I ran:

```bash
kubectl apply -f ./manifests/backend/
kubectl apply -f ./manifests/frontend/
```
