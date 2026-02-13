FROM oven/bun:1.3.9-alpine

WORKDIR /usr/src/app

COPY . .

RUN bun install --production --frozen-lockfile

CMD ["bun", "start"]