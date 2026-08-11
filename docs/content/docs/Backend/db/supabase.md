---
title: "Supabase"
description: "Supabase 简介与使用方式：开源 Firebase 替代品"
---

Supabase 是一个开源的 Firebase 替代品，基于 PostgreSQL（参见 [PostgreSQL](./pg.md)），提供数据库、认证、存储、实时订阅、Edge Functions 等一体化后端服务，并自动生成 REST 与 GraphQL API。

## 核心组件

- Postgres 数据库：完整权限，支持扩展
- Auth：邮箱、OAuth、Magic Link 等认证方式
- Storage：对象存储
- Realtime：数据库变更实时订阅
- Edge Functions：Deno 边缘函数

## 快速开始（托管版）

1. 在 [supabase.com](https://supabase.com) 创建项目
2. 在 Settings → API 获取项目 URL 与 anon key
3. 安装客户端：

```bash
npm install @supabase/supabase-js
```

```ts
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://xxx.supabase.co", "anon-key");
```

## 数据库查询

```ts
// 查询
const { data, error } = await supabase
  .from("posts")
  .select("*")
  .eq("author_id", 1)
  .order("created_at", { ascending: false })
  .limit(10);

// 插入
await supabase.from("posts").insert({ title: "Hello", author_id: 1 });
```

## 认证

```ts
await supabase.auth.signUp({ email, password });
await supabase.auth.signInWithPassword({ email, password });

const {
  data: { user },
} = await supabase.auth.getUser();
```

## 本地开发

```bash
supabase init       # 初始化项目配置
supabase start      # 通过 Docker 启动本地全套服务
supabase db reset   # 应用迁移并填充种子数据
```

## 行级安全（RLS）

Supabase 的客户端 SDK 直接访问数据库，必须为表开启 RLS 并配置策略：

```sql
alter table posts enable row level security;

create policy "anyone can read" on posts
  for select using (true);
```

<Callout type="warn">

面向客户端的表务必开启 RLS，否则任何持有 anon key 的人都可以读写整张表。

</Callout>

## 参考

- [Supabase 官方文档](https://supabase.com/docs)
- 底层数据库：[PostgreSQL](./pg.md)
