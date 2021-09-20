ENV APP "pack-manager-app"
ENV BUILD_DEPENDENCIES "\
    curl
    tar
"
FROM "denoland/deno:alpine-1.14.0"

RUN apk update
RUN apk add ${BUILD_DEPENDENCIES}

RUN curl 
RUN apk del ${BUILD_DEPENDENCIES}