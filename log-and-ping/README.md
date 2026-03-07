# Log Output and Ping Pong App

## Exercise 2.5

Continuing from exercise 2.3

I deleted all resources currently running

I created `./manifests/configmap.yaml` to have an env variable and a file.

I mount the ConfigMap volume in `./manifests/log-output/deployment.yaml`

I then modified the code in `./log-output/reader/index.js` to read the file content and the environment variable

I built and pushed the image for reader using:

```bash
docker build -t autorejecttop/log-output-reader:2.5 ./log-output/reader/
docker push autorejecttop/log-output-reader:2.5
```

I then applied all the resources using:

```bash
for i in $(ls ./manifests); do
  kubectl apply -f $i;
done
```
