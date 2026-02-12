# Log Output App

I don't really know yet the steps to deploy this like the given example, but here's what I did to get it running: `kubectl create deployment log-output --image=autorejecttop/log-output:1.1`

## How I completed this exercise

1. I initialized the app using `npm init`, created the `index.js` file, and provided `start: node index.js` script in `package.json`
2. I completed the exercise just like the requirements using the built-in `crypto` module of Node.js
3. I created a Docker image using `docker build -t autorejecttop/log-output:1.1 .`
4. I pushed the created image to Docker Hub with `docker push autorejecttop/log-output:1.1`
5. I created the cluster using `k3d cluster create -a 2`
6. I configured the context with `kubectl config use-context k3d-k3s-default`
7. Lastly, I ran `kubectl create deployment log-output --image=autorejecttop/log-output:1.1`
