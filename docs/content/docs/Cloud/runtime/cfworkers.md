---
title: "Cloudflare Workers"
description: "全球边缘计算平台"
---

全球边缘计算平台，在 Cloudflare 的 300+ 数据中心运行代码。

## 特点

- **全球分布**: 代码在离用户最近的边缘节点执行
- **零冷启动**: 始终保持热状态，无启动延迟
- **免费额度慷慨**: 每天 100,000 次请求
- **丰富生态**: 支持 KV、D1 数据库、R2 存储、Durable Objects

## 快速开始

### 安装 Wrangler CLI

```bash
npm install -g wrangler
wrangler login
```

### 创建项目

```bash
npm create cloudflare@latest my-worker

# 或手动创建
mkdir my-worker && cd my-worker
npm init -y
npm install wrangler -D
```

### 基础代码

```typescript
// src/index.ts
export default {
  async fetch(request, env, ctx) {
    return new Response('Hello Worker!');
  },
};
```

### 配置文件

```toml
# wrangler.toml
name = "my-worker"
main = "src/index.ts"
compatibility_date = "2024-01-01"

# KV 命名空间绑定
[[kv_namespaces]]
binding = "KV"
id = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"

# 环境变量
[vars]
API_URL = "https://api.example.com"
```

## 常用命令

```bash
# 开发
wrangler dev                  # 本地开发服务器 (http://localhost:8787)
wrangler dev --remote         # 远程开发模式(连接生产环境资源)

# 部署
wrangler deploy               # 部署到 Cloudflare
wrangler deploy --env staging # 部署到 staging 环境

# 密钥管理
wrangler secret put API_KEY   # 设置环境变量(加密存储)
wrangler secret list          # 列出所有密钥

# 类型定义
wrangler types                # 生成 Env 类型定义

# 监控
wrangler tail                 # 实时查看 Worker 日志
wrangler deployments list     # 查看部署历史
```

## 最佳实践

### 1. 缓存策略

```typescript
export default {
  async fetch(request, env, ctx) {
    const cache = caches.default;

    // 检查缓存
    let response = await cache.match(request);
    if (response) {
      return response;
    }

    // 缓存未命中，fetch 并缓存
    response = await fetch(request);

    // 只缓存成功的响应
    if (response.status === 200) {
      ctx.waitUntil(cache.put(request, response.clone()));
    }

    return response;
  },
};
```

### 2. 错误处理

```typescript
export default {
  async fetch(request, env) {
    try {
      const url = new URL(request.url);

      if (url.pathname.startsWith('/api/')) {
        return await handleAPI(request, env);
      }

      return new Response('Not Found', { status: 404 });
    } catch (err) {
      return new Response(err.message, { status: 500 });
    }
  },
};
```

### 3. 环境变量使用

```typescript
type Env = {
  KV: KVNamespace;
  API_KEY: string;
  DB: D1Database;
};

export default {
  async fetch(request: Request, env: Env) {
    // 使用 KV 存储
    await env.KV.put('key', 'value');

    // 访问环境变量
    const apiKey = env.API_KEY;

    // 查询 D1 数据库
    const result = await env.DB.prepare('SELECT * FROM users').all();
  },
};
```

## 绑定服务

Workers 可以绑定多种 Cloudflare 服务：

```typescript
interface Env {
  // KV 存储
  KV: KVNamespace;

  // D1 数据库
  DB: D1Database;

  // R2 对象存储
  BUCKET: R2Bucket;

  // Durable Objects
  COUNTER: DurableObjectNamespace;

  // 其他 Worker
  API: Fetcher;
}
```

## 使用场景

- ✅ 边缘计算和 CDN 场景
- ✅ 全球分布式应用
- ✅ 无服务器函数
- ✅ API 网关和代理

## 相关链接

- [官方文档](https://developers.cloudflare.com/workers/)
- [API 参考](https://developers.cloudflare.com/workers/runtime-apis/)
- [示例教程](https://developers.cloudflare.com/workers/tutorials/)
- [Wrangler CLI](https://github.com/cloudflare/workers-sdk)
- [GitHub](https://github.com/cloudflare/workers-sdk)
