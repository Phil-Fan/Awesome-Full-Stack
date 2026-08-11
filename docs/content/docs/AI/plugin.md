---
title: "Plugin"
description: "AI 插件与技能"
---

- [obra/superpowers: An agentic skills framework & software development methodology that works.](https://github.com/obra/superpowers)

## 配置

- [AGENTS.md](https://github.com/agentsmd/agents.md)

## Skills

```shell
/plugin marketplace add anthropics/skills
```

```shell
/plugin
```

## 办公协作 CLI / Skills

- 飞书：[lark-mcp](https://github.com/larksuiteoapi/lark-mcp): 飞书开放平台官方 MCP Server，`pip install lark-mcp`
- Notion：[notion-mcp-server](https://github.com/makenotion/notion-mcp-server): 官方 MCP Server，`npx -y @notionhq/notion-mcp-server`
- Google Workspace：[gws](https://github.com/googleworkspace/cli): Google Workspace CLI（Drive/Gmail/Calendar 等），附带官方 [Agent Skills](https://github.com/googleworkspace/cli/blob/main/docs/skills.md)

## npx skills

- [vercel-labs/skills](https://github.com/vercel-labs/skills): 开放的 Agent Skills 安装工具，技能市场见 [skills.sh](https://skills.sh)

```shell
npx skills                 # 交互式浏览并安装技能
npx skills add <owner/repo>  # 从 GitHub 仓库安装技能
npx skills list            # 查看已安装技能
```
