FROM node:16-alpine as builder

COPY . /d360clitestinit

RUN cd /d360clitestinit && npm ci && npm run build && npx pkg . --target host --out-path exe

FROM alpine:3.14

COPY --from=builder /d360clitestinit/exe /exe

ENTRYPOINT ["sh", "-c", "/exe/d360clitestinit $INPUT_RDME"]