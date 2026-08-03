---
title: "File Browser"
---

# File Browser

## 下载

## 文档

[File Browser](https://filebrowser.org/index.html)

github[filebrowser/filebrowser: 📂 Web File Browser](https://github.com/filebrowser/filebrowser)
[filebrowser-docs/cli at master · maxant/filebrowser-docs](https://github.com/maxant/filebrowser-docs/tree/master/cli)

## 配置

[Filebrowser 部署 | gobai's notes](https://blog.gocn.top/posts/filebrowser/)

```json
{
  "port": 8080,
  "baseURL": "/files",
  "address": "0.0.0.0",

  "log": "/var/lib/filebrowser/filebrowser.log",
  "database": "/var/lib/filebrowser/filebrowser.db",

  "name": "Myproject",
  "root": "/var/lib/filebrowser/Myproject",
  "plugin": "",
  "allowCommands": true,
  "commands": [
    "ls",
    "df"
  ],
  "enableNewUser": false,
  "shell": "/bin/zsh",
  "locale": "zh-cn",
  "branding": {
    "name": "Myproject",
    "files": "/var/lib/filebrowser/Myproject/branding",
    "disableExternal": true
}
```

```shell
sudo ufw status      # Ubuntu
sudo firewall-cmd --list-all  # CentOS
```

```shell title="放行 8080 端口"
sudo ufw allow 8080/tcp
```

如果有端口已经占用

```shell
sudo lsof -i:8080
```

kill 掉对应的进程即可

### 配置服务

`/etc/systemd/system/filebrowser.service`

```shell
[Unit]
Description=File Browser Service
After=network.target

[Service]
# 使用 filebrowser 用户运行
User=filebrowser
Group=filebrowser

# File Browser 可执行文件和配置文件
ExecStart=/path/to/filebrowser -c /etc/filebrowser/.filebrowser.json

# 自动重启策略
Restart=on-failure

# 工作目录（你的文件根目录）
WorkingDirectory=/path/to/dict/

# 输出日志到 systemd journal
StandardOutput=journal
StandardError=journal

[Install]
WantedBy=multi-user.target
```

```shell
sudo systemctl daemon-reload
sudo systemctl enable filebrowser
sudo systemctl restart filebrowser
sudo systemctl status filebrowser
```

## 访问

可以使用 url 进行访问，但需要配置服务

### 认证方式

认证方式有三种

```shell
filebrowser config set --auth.method=json
```

```shell title="增加 reCAPTCHA"
filebrowser config set --auth.method=json \
  --recaptcha.key site-key \
  --recaptcha.secret private-key \
  --recaptcha.host https://recaptcha.net
```

Proxy Header（代理头认证）

描述：如果你通过 反向代理 登录用户，可以使用这个方式。代理在转发请求时，会在 HTTP header 里带上用户名，File Browser 读取 header 来识别用户。

```shell
filebrowser config set --auth.method=proxy --auth.header=X-My-Header
```

注意事项：

- `X-My-Header` 是你的代理发送的 header 名称。
- 非常信任代理：File Browser 会完全信任这个 header。
- 如果代理被绕过或篡改，攻击者可能直接伪造 header 获取 admin 权限。

No Authentication（无认证）

描述：完全关闭认证，适合 私有网络或家用网络，无需登录即可访问。

```shell
filebrowser config set --auth.method=noauth
```

## Custom

[免费 Favicon 图标生成器 - 在线制作 ICO、PNG、SVG 网站图标 | Favicon.im](https://favicon.im/zh/generator)

假设 /abs/path/to/my/dir 是你的品牌目录：

```shell title="文件夹结构"
/my-brand/
  custom.css
  img/
    logo.svg
    icons/
      favicon.ico
      favicon.svg
```

```shell
filebrowser config set --branding.name "My Name" \
  --branding.files "/abs/path/to/my/dir" \
  --branding.disableExternal
```

## Debug

```shell
sudo tail -f /var/lib/filebrowser/filebrowser.log
```
