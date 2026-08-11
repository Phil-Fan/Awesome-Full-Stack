---
title: "Apple Store"
description: "App Store 应用发布"
---

- [App Store Connect](https://appstoreconnect.apple.com/): 应用管理与发布后台
- [TestFlight](https://developer.apple.com/testflight/): 内测分发
- [App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/): 审核指南
- [App Store Connect API](https://developer.apple.com/app-store-connect/api/): 自动化发布接口

## 发布流程

1. 在 App Store Connect 创建 App 记录，填写元数据与截图
2. 使用 Xcode 或 `xcodebuild` 归档并上传构建版本
3. 通过 TestFlight 内测验证
4. 提交审核，通过后发布
