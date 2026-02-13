# todo-app

Continuing from Exercise 1.4:

Created `index.html` for a simple HTML page and integrate it with the server

Exposed PORT 3000 on the `Dockerfile` and built the image with tag `autorejecttop/todo-app:1.5` using

```bash
docker build -t autorejecttop/todo-app:1.5 .
```

Pushed the image to Docker hub using

```bash
docker push autorejecttop/todo-app:1.5
```

I then updated the image tag used on `manifests/deployment.yaml`, and added the PORT environment variable using:

```yaml
# ...
image: # ...
env:
  - name: PORT
    value: "3000"
```

I then deployed them using:

```bash
kubectl apply -f manifests/deployment.yaml
```

Lastly, I forwarded the port using:

```bash
kubectl port-forward todo-app-6cf5d559c9-49xcb 3003:3000
```
