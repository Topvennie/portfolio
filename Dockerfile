FROM node:24.6.0-alpine3.22 AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN npm install -g corepack@latest && corepack enable

WORKDIR /frontend
COPY . .


FROM base AS build
WORKDIR /frontend
ENV CI=true
RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
  pnpm install --frozen-lockfile
RUN pnpm run build


FROM nginx:1.29-alpine AS final

RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /frontend/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
