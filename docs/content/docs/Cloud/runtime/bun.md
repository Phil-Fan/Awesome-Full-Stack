---
title: "Bun"
description: "极速 JavaScript 运行时"
---

极速 JavaScript 运行时、打包器、测试运行器和包管理器。

## 特点

- **性能出众**: 比 Node.js 快 2-4 倍
- **All-in-One**: 运行时、包管理器、测试、打包一体化
- **原生 TypeScript**: 无需配置即可运行
- **Node.js 兼容**: 可使用大多数 npm 包

## 快速开始

### 安装 Bun

```bash
curl -fsSL https://bun.sh/install | bash

# Windows (PowerShell)
irm bun.sh/install.ps1 | iex

# Homebrew
brew tap oven-sh/bun
brew install bun

# 包管理器
npm install -g bun
```

### 第一个程序

```typescript
// server.ts
const server = Bun.serve({
  port: 3000,
  fetch(req) {
    return new Response("Hello Bun!");
  },
});

console.log(`Listening on ${server.url}`);
```

```bash
bun run server.ts
```

## 常用命令

```bash
# 包管理
bun install                  # 安装依赖
bun add package              # 添加依赖
bun add -d package           # 添加开发依赖
bun remove package           # 移除依赖
bun update                   # 更新依赖

# 运行
bun run script.ts
bun run dev                  # 运行 package.json 中的 dev 脚本
bun --watch script.ts        # 监听模式

# 测试
bun test                     # 运行测试
bun test --watch             # 监听模式测试

# 构建
bun build ./index.ts --outdir ./build

# 运行 Node.js 应用
bun run node-app.js
```

## 内置测试

```typescript
// math.test.ts
import { expect, test } from "bun:test";

test("add", () => {
  expect(add(1, 2)).toBe(3);
});

test("async", async () => {
  const data = await fetchData();
  expect(data).toBeDefined();
});
```

## 高性能文件服务器

```typescript
const server = Bun.serve({
  port: 3000,
  async fetch(req) {
    const url = new URL(req.url);

    // 静态文件服务
    if (url.pathname === '/') {
      return new Response(Bun.file("./index.html"));
    }

    // API 路由
    if (url.pathname.startsWith('/api')) {
      return Response.json({ message: 'API endpoint' });
    }

    return new Response('Not Found', { status: 404 });
  },
});
```

## 使用 Hono 框架

```bash
bun add hono
```

```typescript
import { Hono } from 'hono';
import { serve } from 'bun';

const app = new Hono();

app.get('/', (c) => c.text('Hello Hono + Bun!'));
app.get('/api/:name', (c) => c.json({ name: c.req.param('name') }));

serve({
  fetch: app.fetch,
  port: 3000,
});
```

## 与 Node.js 兼容

```bash
# 大多数 Node.js 应用可以直接用 Bun 运行
bun run node-app.js

# 安装 npm 包
bun install express
```

```typescript
// Express 应用也可以用 Bun 运行
import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Express on Bun!');
});

app.listen(3000);
```

## 性能优化

```typescript
// Bun 的原生文件读取非常快
const file = Bun.file("data.txt");
const text = await file.text();

// 快速写入文件
await Bun.write("output.txt", "Hello World");

// 高性能 HTTP 服务器
Bun.serve({
  port: 3000,
  fetch: {
    // 使用 WebSocket
    websocket: {
      message(ws, message) {
        ws.send(message);
      },
    },
  },
});
```

## 性能对比

| 运行时 | 启动时间 | 内存占用 | 吞吐量 |
|--------|----------|----------|--------|
| Bun    | 极快     | 低       | 最高   |
| Node   | 慢       | 高       | 中     |

## 使用场景

- ✅ 性能敏感应用
- ✅ 高并发服务
- ✅ 构建工具链
- ✅ 替代 Node.js 运行现有应用

## 相关链接

- [官方文档](https://bun.sh/docs)
- [GitHub](https://github.com/oven-sh/bun)
- [Discord 社区](https://bun.sh/discord)
