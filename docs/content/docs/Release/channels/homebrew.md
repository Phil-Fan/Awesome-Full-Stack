---
title: "Homebrew"
description: "macOS/Linux 包发布与管理"
---

- [Homebrew](https://brew.sh/): macOS/Linux 包管理器
- [Homebrew Formulae](https://formulae.brew.sh/): 软件包搜索
- [Homebrew/brew 文档](https://docs.brew.sh/)

## 发布

通过自建 Tap 分发 Formula 或 Cask：

```bash
brew tap-new user/repo
brew create https://example.com/tool-1.0.0.tar.gz
```
