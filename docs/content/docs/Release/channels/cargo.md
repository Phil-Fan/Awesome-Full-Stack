---
title: "Cargo"
description: "Rust 包发布与管理"
---

- [Cargo](https://doc.rust-lang.org/cargo/): Rust 包管理器与构建工具
- [crates.io](https://crates.io/): Rust 官方包注册表
- [Cargo Book](https://doc.rust-lang.org/cargo/reference/publishing.html)

## 发布

```bash
cargo login
cargo publish
```

发布前检查包内容与体积：

```bash
cargo package --list
```
