# ping-pong

## Exercise 1.9

I created the counter ping-pong app that listens to GET requests on `/pingpong` using Bun in `index.ts`

The `Dockerfile` followed the example from [Bun's documentation](https://bun.sh/guides/ecosystem/docker)

I then built the image using:

```bash
docker build -t autorejecttop/ping-pong:1.9 .
```

After that, I stopped the todo-app from [exercise 1.8](https://github.com/autorejecttop/devops_with_kubernetes/tree/1.8/todo-app)

Next, I created and applied the deployment and service of ping-pong app using:

```bash
kubectl apply -f manifests/
```

I modified `../log-output/manifests/ingress.yaml` to make GET requests on `/pingpong` get sent to the ping-pong app

Lastly, I applied the newly modified `ingress.yaml` file and the rest of log-output app using:

```bash
kubectl apply -f ../log-output/manifests/
```
