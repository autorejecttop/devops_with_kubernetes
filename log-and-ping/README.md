# Log Output and Ping Pong App

## Exercise 1.11

Continuing from exercise 1.10, I decided to refactor the directory structure to become what it is now.

I created the persistent volume in the container `k3d-k3s-default-agent-0`

Then, I created the `persistentvolume.yaml` and `persistentvolumeclaim.yaml` with it's respective path and specifications

I then modified the log-output reader and ping-pong app to meet the exercise requirements

After that, I built and pushed them all using:

```bash
docker build -t autorejecttop/log-output-reader:1.11 log-output/reader/
docker build -t autorejecttop/ping-pong:1.11 ping-pong/
```

Next, I applied all the resources using:

```bash
kubectl apply -f manifests/log-output/
kubectl apply -f manifests/ping-pong/
kubectl apply -f manifests/volumes/
```
