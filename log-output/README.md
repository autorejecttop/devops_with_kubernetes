# Log Output App

Continuing from Exercise 1.3:

First, I modified the `index.js` to have an HTTP server where I used `express`

Next, I rebuilt the docker image using:

```bash
docker -t autorejecttop/log-output:1.7 .
```

And then, I modified `manifests/deployment.yaml` to use `autorejecttop/log-output:1.7` and have an environment variable of `PORT: 3000`

After that, I created `manifests/service.yaml` just like in the course material

Next, I created `manifests/ingress.yaml` just like in the course material

Before applying them, I decided to reset and recreate the cluster to stop the current NodePort service and because we only use port 80:

```bash
kubectl delete -f manifests/
k3d cluster delete
k3d cluster create -p 8081:80@loadbalancer -a 2
```

Lastly, I deploy them using:

```bash
kubectl apply -f manifests/
```
