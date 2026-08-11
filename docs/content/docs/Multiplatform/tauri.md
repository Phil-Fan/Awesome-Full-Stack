---
title: "Tauri"
description: "轻量级跨平台桌面应用框架"
---

## 简介

[Tauri](https://tauri.app/) 是基于 Rust 与 Web 前端的轻量级桌面应用框架，界面使用系统自带 WebView，后端逻辑用 Rust 编写，安装包和内存占用远小于 Electron。

## 能力

- 使用系统自带 WebView（macOS WKWebView / Windows WebView2），不捆绑 Chromium，体积更小
- Rust 后端通过 commands 与前端通信，内存安全、性能高
- 支持 Windows、macOS、Linux，2.0 起还支持 iOS 与 Android
- 内置打包、自动更新、权限系统

## 使用方法

```bash
pnpm create tauri-app
cd my-app
pnpm tauri dev
```

打包发布：

```bash
pnpm tauri build
```

## 相关链接

- [Tauri 文档](https://tauri.app/start/)
- [tauri-apps/tauri](https://github.com/tauri-apps/tauri)
