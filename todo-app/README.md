# todo-app

## Exercise 1.12

Continuing from exercise 1.8:

I stopped the `log-output` and the `ping-pong` app

I modified `index.ts` to follow the logic in the exercise requirement

I then built and pushed the image using:

```bash
docker build -t autorejecttop/todo-app:1.12 .
docker push autorejecttop/todo-app:1.12
```

I created the `persistentvolume.yaml` and `persistentvolumeclaim.yaml` files to make PV working

I modified the `deployment.yaml` to mount the PV and use the 1.12 image

Lastly, I ran:

```bash
kubectl apply -f manifests/volumes/
kubectl apply -f manifests/
```
