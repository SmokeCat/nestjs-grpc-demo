# nestjs grpc demo

## 使用说明

克隆仓库:

```shell
git clone git@github.com:SmokeCat/nestjs-grpc-demo.git
```

安装依赖:

```shell
npm i
# or
yarn
```

### grpc-client

调用 grpc 客户端，调用 grpc 服务接口

```shell
npm run start grpc-client
```

### grpc-server

启动 grpc 服务端微服务

```shell
npm run start grpc-server
```

### grpc-server-with-http

同时启动 grpc 服务器和 http 服务器

```shell
npm run start grpc-server-with-http
```

## 本地调试

> 像 postman 一样的 grpc 工具: [grpcui](https://github.com/fullstorydev/grpcui)

```shell
# port = 9999 | 9998
grpcui -plaintext -proto ./proto/player.proto localhost:port
```
