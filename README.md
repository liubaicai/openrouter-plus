# OpenRouter Plus

OpenRouter 模型列表增强浏览器，提供比官网更强的排序与筛选功能。

## 功能

- 从 OpenRouter API 获取全量模型数据，以表格形式展示
- **排序**：支持按标识、上下文长度、输入价格、输出价格、创建时间、更新时间、周用量排序
- **筛选**：支持按名称、标识、输入/输出模态、推理、免费、工具调用、周用量过滤
- **周用量**：支持输入 `100M`、`1B`、`10B` 等格式，快速筛选热门模型
- **详情**：点击 JSON 按钮查看模型完整数据，所有字段名翻译为中文
- 单页无分页，全量展示

## 运行

需要 Node.js >= 18、pnpm。

```bash
pnpm install
pnpm start
```

浏览器打开 http://localhost:3000

开发模式（文件变更自动重启）：

```bash
pnpm dev
```

可通过环境变量 `PORT` 修改端口：

```bash
PORT=8080 pnpm start
```

## Vercel 部署

1. 将项目推送到 GitHub
2. 登录 [vercel.com](https://vercel.com) 并导入该仓库
3. 保持所有设置默认（Vercel 自动检测配置），点击 Deploy
4. 部署完成后即可访问

每次推送到 main/master 分支会自动触发重新部署。

## 技术栈

- **后端**：Node.js + Express + TypeScript（代理 OpenRouter API，5 分钟缓存）
- **前端**：Vue 3（CDN）、原生 CSS
- 本地使用 tsx 直接运行 TypeScript；Vercel 使用无服务器函数

## 项目结构

```
├── server.ts          # Express 服务（本地开发）
├── api/
│   └── models.ts      # Vercel 无服务器函数
├── models.ts          # 类型定义
├── public/
│   └── index.html     # 前端单页应用
├── vercel.json        # Vercel 配置
├── tsconfig.json
├── package.json
└── README.md
```

## 数据来源

https://openrouter.ai/api/frontend/models/find?order=newest
