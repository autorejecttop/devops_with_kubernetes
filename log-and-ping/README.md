# Log Output and Ping Pong App

## Exercise 2.1

Continuing from exercise 1.11

I modified the code of `ping-pong` to serve `/pings` so it returns the number of pings

I modified the code of `log-output-reader` to read pings by fetching `http://ping-pong:3456/pings`

I then built and pushed the images using:

```bash
docker build -t autorejecttop/log-output-reader:2.1 log-output/reader/
docker build -t autorejecttop/ping-pong:2.1 ping-pong/

docker push autorejecttop/log-output-reader:2.1
docker push autorejecttop/ping-pong:2.1
```

I stil have the volumes attached, but it's for the individual programs, they do not read each other's files. Lastly, I ran:

```bash
kubectl apply -f manifests/volumes/
kubectl apply -f manifests/ping-pong/
kubectl apply -f manifests/log-output/
```
