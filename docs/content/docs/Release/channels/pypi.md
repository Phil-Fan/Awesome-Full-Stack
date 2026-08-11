---
title: "PyPI"
description: "Python 包发布与管理"
---

- [PyPI](https://pypi.org/): Python 官方包注册表
- [Python Packaging User Guide](https://packaging.python.org/)
- [uv](https://github.com/astral-sh/uv): 极速 Python 包与项目管理器

## 发布

推荐使用 [twine](https://github.com/pypa/twine) 上传构建产物：

```bash
python -m build
twine upload dist/*
```
