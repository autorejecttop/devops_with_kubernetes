# todo-app

## Exercise 1.8

Continuing from exercise 1.6:

I stopped the `log-output` app

I modified the `index.html` file to update the exercise number from 1.5 to 1.8

I then rebuild the docker image using:

```bash
docker build -t autorejecttop/todo-app:1.8 .
```

After that I push it using:

```bash
docker push autorejecttop/todo-app:1.8
```

I then modified the tag in `manifests/deployment.yaml` from 1.6 to 1.8

Next, I changed the service so I get `type: ClusterIP`, removed the `nodePort: ...`, and removed the `name: http` to mimic the `manifests/service.yaml` on the course material

After that, I created the `manifests/ingress.yaml` file just like the course material, but the port number on this one is `number: 1234`

I then ran:

```bash
kubectl apply -f manifests/
```
