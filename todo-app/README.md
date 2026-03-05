# Todo App

## Exercise 2.4

I stopped all running resources

Just like in exercise 2.3, I created `manifests/namespace.yaml` with the namespace `project`

I applied it to the metadata on all the `.yaml` files inside of `./manifests`

I then ran:

```bash
kubectl apply -f ./manifests/backend
kubectl apply -f ./manifests/frontend
```
