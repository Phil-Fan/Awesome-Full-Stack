---
title: "Docker Compose"
---

Docker Compose 是一种基于 YAML 的多容器编排工具，用于在单机环境中统一定义、启动和管理多个相互依赖的 Docker 服务。

* **多个容器**
* **一个文件**
* **一条命令**

| 对比 | Compose | K8s |
| --- | --- | --- |
| 复杂度 | 低 | 高 |
| 学习成本 | 小 | 大 |
| 适用场景 | 本地 / 小规模 | 生产 / 集群 |
| 自愈能力 | ❌ | ✅ |
| 自动扩缩 | ❌ | ✅ |

👉 **Compose 是“单机编排”，K8s 是“集群编排”**

## 使用

```bash
docker compose up          # 前台启动
docker compose up -d       # 后台启动
docker compose down        # 停止并删除
docker compose ps          # 查看服务状态
docker compose logs -f     # 看日志
docker compose restart     # 重启
docker compose exec db bash
```

## 一、为什么会有 Docker Compose？

### 没有 Compose 的世界（很痛苦 😭）

一个典型 Web 系统至少有：

* 前端（Next.js）
* 后端（API）
* 数据库（MySQL）
* Redis

你需要手敲：

```bash
docker run -d --name db mysql
docker run -d --name redis redis
docker run -d -p 3000:3000 backend
docker run -d -p 80:80 frontend
```

问题：

* 端口、网络、依赖顺序全靠记
* 重启就乱
* 新人根本跑不起来

```bash
docker compose up -d
```

👉 **一条命令，整套系统起来**

## 二、Docker Compose 的核心思想

* 1）声明式：你只说：“我要什么”，而不是：“先启动 A，再连 B，再配 C”
* 2）服务（service）是核心：一个 service ≈ 一个容器模板

* 3）默认网络自动创建：Compose 自动建一个 bridge 网络，服务名 = DNS 名称

```yaml
services:
  web:
  api:
  db:
```

## 示例

```yaml
services:
  服务名:
    image / build
    ports
    environment
    volumes
    networks
    depends_on
```

### 场景：Next.js + API + MySQL

```yaml
version: "3.9"

services:
  frontend:
    image: nextjs-app
    ports:
      - "3000:3000"
    depends_on:
      - backend

  backend:
    image: api-server
    ports:
      - "8080:8080"
    depends_on:
      - db

  db:
    image: mysql:8
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: app
    volumes:
      - mysql-data:/var/lib/mysql

volumes:
  mysql-data:
```
