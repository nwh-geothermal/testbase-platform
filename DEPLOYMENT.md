# GitHub Pages 部署指南

## 快速部署步骤

### 1. 推送代码到 GitHub

```bash
git add .
git commit -m "Configure for GitHub Pages deployment"
git push origin main
```

### 2. 启用 GitHub Pages

1. 进入你的 GitHub 仓库设置页面
2. 滚动到 "Pages" 部分
3. 在 "Source" 下选择 "GitHub Actions"
4. 保存设置

### 3. 等待部署完成

- GitHub Actions 会自动运行部署工作流
- 你可以在仓库的 "Actions" 标签页查看部署进度
- 首次部署通常需要 2-5 分钟

### 4. 访问你的网站

部署完成后，你的网站将在以下地址可用：

- `https://你的用户名.github.io/geothermal-testbase-platform`

## 本地测试

### 开发模式

```bash
npm run dev
```

### 静态导出测试

```bash
npm run build
npm run export
# 或者
npm run deploy
```

导出的静态文件将在 `out/` 目录中。

## 自定义域名（可选）

如果你有自己的域名：

1. 在 `public/` 目录创建 `CNAME` 文件，内容为你的域名：

```
yourdomain.com
```

2. 在 DNS 提供商设置 CNAME 记录：

- 记录类型：CNAME
- 主机记录：www (或 @)
- 记录值：你的用户名.github.io

3. 更新 `next.config.js` 中的 `assetPrefix` 和 `basePath`：

```javascript
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
  // 如果使用自定义域名，注释掉这两行
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/geothermal-testbase-platform' : '',
  // basePath: process.env.NODE_ENV === 'production' ? '/geothermal-testbase-platform' : '',
}
```

## 配置说明

### 关键配置文件

- **next.config.js**: Next.js 静态导出配置
- **.github/workflows/deploy.yml**: GitHub Actions 自动部署工作流
- **public/.nojekyll**: 防止 GitHub Pages 使用 Jekyll 处理
- **package.json**: 部署脚本

### 静态导出限制

由于 GitHub Pages 只支持静态内容，以下 Next.js 功能不可用：

- 服务端渲染 (SSR)
- API 路由
- 增量静态再生 (ISR)
- 动态路由（除非预渲染）

## 故障排除

### 部署失败

1. 检查 GitHub Actions 日志
2. 确保所有依赖都在 `package.json` 中
3. 验证代码没有语法错误

### 样式/资源加载问题

1. 确保所有资源路径是相对路径
2. 检查 `assetPrefix` 和 `basePath` 配置
3. 验证图片使用了 `unoptimized: true` 配置

### 404 错误

1. 确保所有链接使用锚点 (#) 而不是路由
2. 检查组件是否有正确的 `id` 属性
3. 验证链接路径格式正确

## 更新部署

每次推送到 `main` 分支都会触发自动部署。如果需要手动部署：

```bash
# 本地构建
npm run build

# 推送触发部署
git push origin main
```
