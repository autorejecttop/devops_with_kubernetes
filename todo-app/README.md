# Todo App

## Exercise 2.6

Continuing from exercise 2.4

I stopped all running resources

I created the configmap in `./manifests/configmap.yaml`

I then looked for and modified all the hard-coded URLs in the program and made their respecitve variable in `./manifests/configmap.yaml`

`./todo-app-frontend` is the only one that changed so I ran:

```bash
docker build -t autorejecttop/todo-app-frontend:2.6 ./todo-app-frontend
docker push autorejecttop/todo-app-frontend:2.6
```

Lastly, I ran:

```bash
kubectl apply -f ./manifests/namespace.yaml

for i in $(ls ./manifests/); do
    kubectl apply -f ./manifests/$i;
done
```
