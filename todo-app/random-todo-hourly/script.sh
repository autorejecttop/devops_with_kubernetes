#!/usr/bin/env sh
set -e

url=$(curl -Ls -o /dev/null -w '%{url_effective}' https://en.wikipedia.org/wiki/Special:Random)

curl --request POST --header "Content-Type: application/json" --data "{\"title\": \"Read $url\"}" $BACKEND_SERVICE_URL/todos