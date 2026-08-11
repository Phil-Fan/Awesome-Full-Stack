---
title: "PostgreSQL"
description: "PostgreSQL 简介与使用方式"
---

PostgreSQL（简称 PG）是目前最先进的开源对象关系型数据库，以功能丰富、标准严格、稳定可靠著称，适合从单机应用到大规模生产系统的各类场景。

## 特性

- 完整 SQL 标准 + ACID 事务，MVCC 并发控制
- 丰富数据类型：JSON/JSONB、数组、范围类型、UUID
- 扩展生态：PostGIS（地理）、pg_trgm（模糊搜索）、TimescaleDB（时序）、pgvector（向量检索）
- 逻辑复制、流式只读副本、表分区

## 安装

### macOS

```bash
brew install postgresql@17
brew services start postgresql@17
```

### Docker

```bash
docker run -d --name pg \
  -e POSTGRES_PASSWORD=postgres \
  -p 5432:5432 \
  postgres:17
```

## psql 命令行

```bash
psql postgres    # 连接默认 postgres 数据库
```

常用元命令：

```text
\l       列出所有数据库
\c db    切换数据库
\dt      列出表
\d t     查看表结构
\q       退出
```

## 常用 SQL

```sql
CREATE DATABASE app;

CREATE TABLE users (
  id   BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  meta JSONB DEFAULT '{}'
);

INSERT INTO users (name, meta) VALUES ('Alice', '{"role": "admin"}');
SELECT * FROM users WHERE meta->>'role' = 'admin';
```

## 客户端

- [pgAdmin](https://www.pgadmin.org/)：官方图形化管理工具
- [TablePlus](https://tableplus.com/)：跨平台数据库客户端
- [DBngin](https://dbngin.com/)：Mac 本地多版本 PG 管理

## 生态

- [Neon](https://neon.tech/)：Serverless Postgres
- [Supabase](./supabase.md)：基于 Postgres 的一体化后端服务
