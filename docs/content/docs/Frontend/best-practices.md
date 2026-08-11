---
title: "最佳实践"
---

- [ni](https://github.com/antfu-collective/ni): package manager by [Antfu](https://antfu.me)

```shell
npx create-next-app@latest my-app
```

- [React](https://react.dev/)
- [Next.js](https://nextjs.org/)
  - [TypeScript](https://github.com/microsoft/TypeScript)
  - [biome](https://github.com/biomejs/biome): Next.js 项目
  - [tailwindcss](https://github.com/tailwindlabs/tailwindcss)+[shadcn/ui](https://ui.shadcn.com/)
  - [motion](https://github.com/motiondivision/motion): 动画库
  - [zustand](https://zustand.docs.pmnd.rs/getting-started/introduction): 前端状态管理库
  - [TanStack Query](https://tanstack.com/query/latest/docs/framework/react/overview): 数据查询库

## 字体

- [Google Fonts](https://fonts.google.com/)

Libre Baskerville

- 微调字间距（标题建议 0.05em-0.1em，正文默认）和行高（1.5 倍字高，移动端可 1.6-1.7），提升可读性。
- 字体选择兼顾可读性、品牌调性、跨平台兼容性。
- 标题用无衬线字体（如 Roboto、Montserrat），正文推荐 Open Sans、Inter，不超两种主字体。
- 建议加入系统字体栈作 fallback，确保一致性。

## UX

- 骨架屏流光：
- 分布进场：列表
- 不要做点击以后消失的按钮
- 尽量减少没用的按钮和信息，注意留白的艺术

## 文件结构

- App Router：在项目根（或 src/）中创建 app/ 目录。任意文件夹都会映射为一个路由段，但必须包含 page.tsx/page.jsx 或 route.ts 才能对外暴露。根目录必须包含 app/layout.tsx（Root Layout），显式返回 `<html>` 与 `<body>`，相当于原 pages/_app.tsx +_document.tsx。
- Colocation：可以把组件、数据请求逻辑、测试等文件与路由段放在同一层，因为只有 page/route 的返回内容才会发送到客户端；若不想混合，也可把非路由代码放在 src/ 外部。
- 公共资源：所有静态资源放在 public/，next/image 组件可以直接引用 /logo.png 等路径；Manifest、Icons 等 PWA 资源也建议放在该目录。
- 配置与辅助文件：next.config.*、.env*、tsconfig.json 等需要位于项目根目录。App Router 额外支持 app/manifest.ts、app/icon.png、app/robots.ts 这类文件约定；API Route 则位于 app/api/**/route.ts。
- 脚本与产物：开发阶段输出写入 .next/dev，正式构建写入 .next。记得把 .next、.next/dev、next-env.d.ts 写入 .gitignore，避免将构建结果提交到仓库。
