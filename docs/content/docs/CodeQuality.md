---
title: "Code Quality"
icon: ShieldCheck
---

### 可观测

细粒度

- [Logfire](https://logfire.pydantic.dev/)：Python 日志分析与可视化
- [Weights & Biases](https://wandb.ai/site): wandb
- [langfuse/langfuse](https://github.com/langfuse/langfuse)
- [eunomia-bpf/agentsight](https://github.com/eunomia-bpf/agentsight): observability in eBPF

粗粒度/系统侧

- [Uptime Kuma](https://github.com/louislam/uptime-kuma): 自托管的网站与服务可用性监控工具
- [Beszel](https://github.com/henrygd/beszel): 轻量级服务器资源监控平台
- [Prometheus](https://prometheus.io/)
- [Grafana](https://grafana.com/)：指标与日志可视化

### Testing

- test-driven
- regression tests
- property-based tests

### Code Coverage

- [Codecov](https://app.codecov.io)

### Formatter & Linter

- [eslint/eslint](https://github.com/eslint/eslint): JavaScript/TypeScript 静态分析
- [prettier/prettier](https://github.com/prettier/prettier): 代码格式化，可配置性强
  - [rbubley/mirrors-prettier](https://github.com/rbubley/mirrors-prettier) for pre-commit
- [biomejs/biome](https://github.com/biomejs/biome): 一体化 Linter & Formatter & Bundler（ESLint + Prettier 替代）
- [markdownlint](https://github.com/DavidAnson/markdownlint): Markdown 静态分析
- [autocorrect](https://github.com/huacnlee/autocorrect): CJK 排版自动修正
- [millionco/react-doctor](https://github.com/millionco/react-doctor)

### commit hooks

- [pre-commit](https://github.com/pre-commit/pre-commit)：多语言 pre-commit hooks 管理框架
- [husky](https://github.com/typicode/husky) 适合前端项目

### 版本管理

- [changesets/changesets](https://github.com/changesets/changesets): monorepos
- [googleapis/release-please](https://github.com/googleapis/release-please): generate release PRs based on the conventionalcommits.org spec
