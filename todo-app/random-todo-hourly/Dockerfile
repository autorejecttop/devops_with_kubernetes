FROM alpine/curl:8.17.0

WORKDIR /usr/src/app

COPY ./script.sh .
RUN chmod +x ./script.sh

CMD [ "./script.sh" ]