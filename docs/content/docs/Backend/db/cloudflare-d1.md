---
title: "Cloudflare D1"
description: "Cloudflare D1 服务端 less SQLite 数据库简介与使用方式"
---

D1 是 Cloudflare 推出的 Serverless 关系型数据库，基于 SQLite 构建，运行在 Cloudflare 的边缘网络上，与 Workers / Pages 深度集成，无需运维、按量计费。

## 特性

- 基于 SQLite，标准 SQL（参见 [SQL](./sql.mdx)）
- 零运维，随 Workers 部署到全球边缘
- 免费额度充足，适合个人项目与中小型应用

## 创建数据库

```bash
wrangler d1 create my-database
```

命令输出中的 `database_id` 需要填入项目的 `wrangler.jsonc`：

```jsonc
{
  "d1_databases": [
    {
      "binding": "DB",
      "database_name": "my-database",
      "database_id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
    }
  ]
}
```

## 在 Workers 中查询

```ts
export default {
  async fetch(request: Request, env: Env) {
    const { results } = await env.DB.prepare(
      "SELECT * FROM users WHERE id = ?",
    )
      .bind(1)
      .all();
    return Response.json(results);
  },
};
```

## 执行 SQL

```bash
# 远程执行
wrangler d1 execute my-database --command "CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT)"

# 本地执行 SQL 文件
wrangler d1 execute my-database --local --file ./schema.sql
```

## 本地开发

`wrangler dev` 会自动提供本地 D1 实例（数据存放在 `.wrangler/` 目录），用 `--local` 参数即可对本地库建表和填充数据，不影响线上数据。

## 参考

- [D1 官方文档](https://developers.cloudflare.com/d1/)
- SQLite 语法基础：[SQL](./sql.mdx)
