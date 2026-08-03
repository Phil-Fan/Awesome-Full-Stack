---
title: "开发工具"
---

# 开发工具

- [cmux](https://github.com/shuveb/cmux): 多终端管理工具
  - [iTerm2](https://github.com/gnachman/iTerm2)：Mac 下最好的终端
- [Amphetamine](https://apps.apple.com/cn/app/amphetamine/id937984704?mt=12)：Mac 防休眠工具
- [tmux](https://github.com/tmux/tmux)
  - [A Quick and Easy Guide to tmux - Ham Vocke](https://hamvocke.com/blog/a-quick-and-easy-guide-to-tmux/)
  - [Make tmux Pretty and Usable - Ham Vocke](https://hamvocke.com/blog/a-guide-to-customizing-your-tmux-conf/)
- [Nvim](https://neovim.io/): 现代的 Vim 替代品
  - [Vim](https://www.vim.org/)
- [chezmoi](https://github.com/twpayne/chezmoi): Dotfiles 管理工具
  - [dot-files](https://github.com/Phil-Fan/dot-files): 我的 dotfiles

### 文本处理

- [awk](https://www.gnu.org/software/gawk/): 强大的文本分析与报告生成工具
- [sed](https://www.gnu.org/software/sed/): 流编辑器，用于文本过滤和转换

### 效率软件

- 浏览器：Safari
- 日程：苹果自带日历
- 多媒体：[VLC media player](https://www.videolan.org/vlc/index.zh_CN.html)，[PicGo（图床）](https://github.com/Molunerfinn/PicGo/releases)
- 思维导图：[Xmind](https://xmind.cn/download/)；首选项设置 深色主题 `Alt+S`：概要 `Ctrl+L`：方程
- 即时通讯：[TIM](https://tim.qq.com/download.html)，[WeChat](https://weixin.qq.com/)，[飞书](https://www.feishu.cn/download/)，[腾讯会议](https://meeting.tencent.com/download/)，[钉钉](https://page.dingtalk.com/wow/z/dingtalk/simple/ddhomedownload#/)，[微信文件传输网页版](https://filehelper.weixin.qq.com/)
- PDF 阅读：Adobe Acrobat
- Markdown：[Typora](https://typoraio.cn/)
- 云同步（付费）：[百度网盘](https://pan.baidu.com/download#win)、[阿里网盘](https://www.alipan.com/)，坚果云 WebDav
- 音乐：[QQ 音乐](https://y.qq.com/download/index.html)，Apple Music
- 远程：[ToDesk](https://www.todesk.com/)、无影云电脑
- 压缩：[keka](https://www.keka.io/zh_CN/) / [Bandzip](https://www.bandisoft.com/bandizip/)
- 公式识别：[SimpleTex](https://simpletex.cn/)
- RSS 阅读器：[Folo](https://folo.is/?new_locale=zh-cn)
- LLM：[Cherry Studio](https://www.cherry-ai.com/)
- 邮件：Gmail
- 密码管理：Apple 密码管理
- 翻译：[欧陆词典](https://www.eudic.net/v4/en/app/download)，[词典下载网站](https://forum.freemdict.com/tag/%EF%BB%BF英语/l/hot)
- 录屏：[ScreenStudio](https://www.screencast-o-matic.com/screen-cast-studio)

### MacOS 效率工具

- [iTerm2](https://iterm2.com/)：macOS 终端替代品
  - [iTerm2 安装配置使用指南](https://zhuanlan.zhihu.com/p/550022490)
  - oh my zsh
  - 设置启动热键：`preference -> keys -> Create a Dedicated Hotkey Window`，设置 `Ctrl+Alt+T`
- [Raycast](https://www.raycast.com/)：替代聚焦搜索
  - `Command+K` 显示扩展操作
  - 软件卸载、快速打开应用、窗口管理
  - [Raycast 小技巧之 Quicklink 二三事](https://sspai.com/post/72951)
- [ibar](https://apps.apple.com/cn/app/ibar/id6443843900?mt=12)：菜单栏隐藏
- [Pixea](https://apps.apple.com/cn/app/pixea/id1507782672?mt=12)：图片浏览
- [Downie](https://www.downie.cn/)：下载工具
- [Scroll Reverser](https://pilotmoon.com/scrollreverser/)：反向滚动鼠标和触控板
- [Typora](https://typoraio.cn/)：Markdown 编辑器

  ```shell
  echo 'alias typora="open -a Typora"' >> ~/.zshrc
  ```

- [Parallels Desktop](https://www.parallels.cn/products/desktop/trial/)：Windows 虚拟机
- [BetterDisplay](https://github.com/waydabber/BetterDisplay)：Unlock your displays on your Mac! Flexible HiDPI scaling
- LaTeX 环境

  ```shell
  brew install mactex --cask
  ```

- [Piclist](https://piclist.cn/)：图床

  ```shell
  brew install piclist --cask
  ```

- 未签名应用手动信任：

  ```shell
  xattr -cr /Applications/zju-learning-assistant.app
  ```

- 资源站：[xclient](https://xclient.info/)、[macked](https://macked.app/)、[digit77](https://www.digit77.com/)、[xmac](https://xmac.app/)、[macwk](https://macwk.cn/)

### 专业软件

- Coding：[Cursor](https://cursor.com/home)，[Windsurf](https://windsurf.com/download/editor)，[VS Code](https://code.visualstudio.com/Download)
- Environment：
  - Python：[uv](https://github.com/astral-sh/uv) / [miniconda](https://docs.anaconda.com/miniconda/) / [anaconda](https://www.anaconda.com/download)
  - Git：[git](https://git-scm.com/download/win)
  - Node：[node](https://nodejs.org/en/download)
- 文献：[Zotero](https://www.zotero.org/download/)
- LaTeX：texlive，[Overleaf](https://www.overleaf.com)
- 绘图：PPT，Draw.io，AI，PS，Geogebra，Python
- 数据：Excel，Tableau
- Word：[小恐龙公文助手](https://xkonglong.com/xkl_wordaddin/)
- 驯化 Windows：[Dism++](https://github.com/Chuyu-Team/Dism-Multi-language/releases)
- 音乐：[Sibelius（西贝柳斯）打谱软件](https://sibelius.mairuan.com/)
- Matlab

### 设计软件

- [Adobe](https://www.adobe.com/cn/)：AI，PS，PR，[剪映](https://www.capcut.cn/)
- PowerPoint，okplus，[Canva](https://www.canva.cn/)
