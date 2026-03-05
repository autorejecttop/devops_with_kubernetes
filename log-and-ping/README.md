# Log Output and Ping Pong App

## Exercise 2.3

Continuing from exercise 2.1

I deleted all resources currently running

I created `./manifests/namespace.yaml` to define the namespace `exercises`

I then ran:

```bash
kubectl apply -f ./manifests/namespace.yaml
```

Next, I modified all of `*.yaml` in `./manifests/` to use the namespace, for example:

```yaml
# ...
metadata:
  name: <abc>
  namespace: exercises
# ...
```

Lastly, I ran all the `.yaml` files in `./manifests/` using:

```bash
kubectl apply -f ./manifests/volumes/
kubectl apply -f ./manifests/log-output/
kubectl apply -f ./manifests/ping-pong/
```
