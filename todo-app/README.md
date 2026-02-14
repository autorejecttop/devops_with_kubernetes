# todo-app

## Exercise 1.6

Continuing from exercise 1.5:

I created the `service.yaml` file in the `manifests/` directory with `nodePort: 30081`

I deleted my running cluster and re-created it using:

```bash
  k3d cluster create -p 8081:80@loadbalancer -p 8082:30080@agent:0 -p 8083:30081@agent:0 -a 2
```

I then ran:

```bash
  # ... <the deployment and service from the material>
  kubectl apply -f ./manifests/deployment.yaml
  kubectl apply -f ./manifests/service.yaml
```

Lastly, I updated the exercise number in my `index.html` from 1.5 to 1.6
