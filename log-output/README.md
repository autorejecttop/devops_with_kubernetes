# Log Output App

Continuing from Exercise 1.7:

I split the log generator and the http log reader into `generator/` and `reader/` respectively

I then modify each to work as intended in the exercise guide

Next, I built both of the docker image using:

```bash
docker -t autorejecttop/log-output-generator:1.10 generator/
docker -t autorejecttop/log-output-reader:1.10 reader/
```

I pushed it using:

```bash
docker push autorejecttop/log-output-generator:1.10
docker push autorejecttop/log-output-reader:1.10
```

I then modified the `deployment.yaml` to use an emptyDir volume mount

I added the `pullImagePolicy: Always` because I had a struggle trying to get the latest image working, now it always pulls the latest image

I then ran:

```bash
kubectl apply -f manifests/
```
