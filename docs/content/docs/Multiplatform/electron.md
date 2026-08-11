---
title: "Electron"
description: "基于 Web 技术的桌面应用框架"
---

## 简介

[Electron](https://www.electronjs.org/) 是使用 HTML/CSS/JavaScript 构建跨平台桌面应用的框架，将 Chromium（渲染界面）与 Node.js（系统能力）打包在一起，VS Code、Slack、Discord 等知名应用均基于它开发。

## 能力

- 一套代码运行在 Windows、macOS、Linux
- 完整的 Chromium 与 Node.js API，生态最成熟
- 自动更新（electron-updater）、系统托盘、原生菜单与通知
- 打包分发：Electron Forge / electron-builder
- 代价：安装包体积大（捆绑 Chromium）、内存占用高

## 使用方法

```bash
npm create electron-app@latest my-app
cd my-app
npm start
```

打包发布：

```bash
npm run make
```

## 参考文档

- [简介 | Electron](https://www.electronjs.org/zh/docs/latest/)

## 项目模板

- [LuanRoger/electron-shadcn](https://github.com/LuanRoger/electron-shadcn)：基于 Electron Forge、Vite 和 TypeScript 的 shadcn/ui 桌面应用模板，集成 React、Tailwind CSS、Electron 自动更新、Playwright 测试与 GitHub Actions 发布流程。
