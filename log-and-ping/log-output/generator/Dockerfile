FROM node:24.13.1-alpine3.23 AS base
WORKDIR /usr/src/app

# install dependencies into temp directory
# this will cache them and speed up future builds
FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json package-lock.json /temp/dev/
RUN cd /temp/dev && npm ci

# install with --production (exclude devDependencies)
RUN mkdir -p /temp/prod
COPY package.json package-lock.json /temp/prod/
RUN cd /temp/prod && npm ci --omit=dev

# copy node_modules from temp directory
# then copy all (non-ignored) project files into the image
FROM base AS prerelease
COPY . .

# [optional] tests & build
ENV NODE_ENV=production

# copy production dependencies and source code into final image
FROM base AS release
COPY --from=prerelease /usr/src/app/index.js .
COPY --from=prerelease /usr/src/app/package.json .

# run the app
# TODO: Find a way to get persistent volumes working with non-root user
# RUN chown -R node:node /usr/src/app
# USER node
ENTRYPOINT [ "npm", "start" ]