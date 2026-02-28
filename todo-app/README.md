# todo-app

## Exercise 1.13

Continuing from exercise 1.12:

I modified `index.html` to meet the exercise specification

I then built and pushed the image using:

```bash
docker build -t autorejecttop/todo-app:1.13 .
docker push autorejecttop/todo-app:1.13
```

After that, I modified `manifests/deployment.yaml` to use the 1.13 version

Lastly, I ran:

```bash
kubectl apply -f manifests/deployment.yaml
```
